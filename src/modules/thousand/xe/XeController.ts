import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xe")
export default class XeController {
  @operation({
    summary: "Get Xe",
  })
  @get()
  static getXe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xe",
  })
  @post("{id}")
  static createXe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
