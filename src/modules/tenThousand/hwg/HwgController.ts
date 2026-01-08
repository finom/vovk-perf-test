import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hwg")
export default class HwgController {
  @operation({
    summary: "Get Hwg",
  })
  @get()
  static getHwg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwg",
  })
  @post("{id}")
  static createHwg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
