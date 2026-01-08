import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hwq")
export default class HwqController {
  @operation({
    summary: "Get Hwq",
  })
  @get()
  static getHwq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwq",
  })
  @post("{id}")
  static createHwq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
