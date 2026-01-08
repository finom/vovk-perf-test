import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xf")
export default class XfController {
  @operation({
    summary: "Get Xf",
  })
  @get()
  static getXf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xf",
  })
  @post("{id}")
  static createXf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
