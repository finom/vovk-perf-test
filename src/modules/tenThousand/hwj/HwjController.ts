import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hwj")
export default class HwjController {
  @operation({
    summary: "Get Hwj",
  })
  @get()
  static getHwj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwj",
  })
  @post("{id}")
  static createHwj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
