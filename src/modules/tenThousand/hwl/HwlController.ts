import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hwl")
export default class HwlController {
  @operation({
    summary: "Get Hwl",
  })
  @get()
  static getHwl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwl",
  })
  @post("{id}")
  static createHwl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
