import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hwu")
export default class HwuController {
  @operation({
    summary: "Get Hwu",
  })
  @get()
  static getHwu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwu",
  })
  @post("{id}")
  static createHwu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
