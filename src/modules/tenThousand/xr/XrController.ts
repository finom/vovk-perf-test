import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xr")
export default class XrController {
  @operation({
    summary: "Get Xr",
  })
  @get()
  static getXr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xr",
  })
  @post("{id}")
  static createXr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
