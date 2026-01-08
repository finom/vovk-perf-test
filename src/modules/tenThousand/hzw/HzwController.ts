import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hzw")
export default class HzwController {
  @operation({
    summary: "Get Hzw",
  })
  @get()
  static getHzw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzw",
  })
  @post("{id}")
  static createHzw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
