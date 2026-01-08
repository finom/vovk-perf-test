import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mgv")
export default class MgvController {
  @operation({
    summary: "Get Mgv",
  })
  @get()
  static getMgv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgv",
  })
  @post("{id}")
  static createMgv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
