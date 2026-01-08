import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hzp")
export default class HzpController {
  @operation({
    summary: "Get Hzp",
  })
  @get()
  static getHzp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzp",
  })
  @post("{id}")
  static createHzp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
