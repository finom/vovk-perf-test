import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("noi")
export default class NoiController {
  @operation({
    summary: "Get Noi",
  })
  @get()
  static getNoi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Noi",
  })
  @post("{id}")
  static createNoi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
