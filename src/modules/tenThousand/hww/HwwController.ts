import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hww")
export default class HwwController {
  @operation({
    summary: "Get Hww",
  })
  @get()
  static getHww = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hww",
  })
  @post("{id}")
  static createHww = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
