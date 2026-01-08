import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hzr")
export default class HzrController {
  @operation({
    summary: "Get Hzr",
  })
  @get()
  static getHzr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzr",
  })
  @post("{id}")
  static createHzr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
