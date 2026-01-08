import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxl")
export default class GxlController {
  @operation({
    summary: "Get Gxl",
  })
  @get()
  static getGxl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxl",
  })
  @post("{id}")
  static createGxl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
