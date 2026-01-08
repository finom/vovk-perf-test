import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxl")
export default class LxlController {
  @operation({
    summary: "Get Lxl",
  })
  @get()
  static getLxl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxl",
  })
  @post("{id}")
  static createLxl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
