import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mrv")
export default class MrvController {
  @operation({
    summary: "Get Mrv",
  })
  @get()
  static getMrv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrv",
  })
  @post("{id}")
  static createMrv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
