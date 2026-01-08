import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hwk")
export default class HwkController {
  @operation({
    summary: "Get Hwk",
  })
  @get()
  static getHwk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwk",
  })
  @post("{id}")
  static createHwk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
