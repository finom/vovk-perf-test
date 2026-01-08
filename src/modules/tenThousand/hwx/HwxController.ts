import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hwx")
export default class HwxController {
  @operation({
    summary: "Get Hwx",
  })
  @get()
  static getHwx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwx",
  })
  @post("{id}")
  static createHwx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
