import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xq")
export default class XqController {
  @operation({
    summary: "Get Xq",
  })
  @get()
  static getXq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xq",
  })
  @post("{id}")
  static createXq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
