import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxr")
export default class HxrController {
  @operation({
    summary: "Get Hxr",
  })
  @get()
  static getHxr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxr",
  })
  @post("{id}")
  static createHxr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
