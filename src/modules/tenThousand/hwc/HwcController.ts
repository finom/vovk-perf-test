import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hwc")
export default class HwcController {
  @operation({
    summary: "Get Hwc",
  })
  @get()
  static getHwc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwc",
  })
  @post("{id}")
  static createHwc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
