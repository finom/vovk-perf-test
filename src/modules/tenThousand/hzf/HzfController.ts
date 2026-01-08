import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hzf")
export default class HzfController {
  @operation({
    summary: "Get Hzf",
  })
  @get()
  static getHzf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzf",
  })
  @post("{id}")
  static createHzf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
