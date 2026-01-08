import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mu")
export default class MuController {
  @operation({
    summary: "Get Mu",
  })
  @get()
  static getMu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mu",
  })
  @post("{id}")
  static createMu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
