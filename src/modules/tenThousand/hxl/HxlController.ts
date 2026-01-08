import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxl")
export default class HxlController {
  @operation({
    summary: "Get Hxl",
  })
  @get()
  static getHxl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxl",
  })
  @post("{id}")
  static createHxl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
