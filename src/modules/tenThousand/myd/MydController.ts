import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("myd")
export default class MydController {
  @operation({
    summary: "Get Myd",
  })
  @get()
  static getMyd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myd",
  })
  @post("{id}")
  static createMyd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
