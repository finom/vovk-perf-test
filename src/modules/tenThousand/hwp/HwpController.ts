import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hwp")
export default class HwpController {
  @operation({
    summary: "Get Hwp",
  })
  @get()
  static getHwp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwp",
  })
  @post("{id}")
  static createHwp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
