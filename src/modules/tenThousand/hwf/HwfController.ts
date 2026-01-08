import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hwf")
export default class HwfController {
  @operation({
    summary: "Get Hwf",
  })
  @get()
  static getHwf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwf",
  })
  @post("{id}")
  static createHwf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
