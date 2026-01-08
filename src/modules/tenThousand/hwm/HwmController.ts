import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hwm")
export default class HwmController {
  @operation({
    summary: "Get Hwm",
  })
  @get()
  static getHwm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwm",
  })
  @post("{id}")
  static createHwm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
