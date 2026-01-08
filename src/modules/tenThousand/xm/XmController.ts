import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xm")
export default class XmController {
  @operation({
    summary: "Get Xm",
  })
  @get()
  static getXm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xm",
  })
  @post("{id}")
  static createXm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
