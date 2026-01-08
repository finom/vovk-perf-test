import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bs")
export default class BsController {
  @operation({
    summary: "Get Bs",
  })
  @get()
  static getBs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bs",
  })
  @post("{id}")
  static createBs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
