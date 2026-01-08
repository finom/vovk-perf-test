import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hzd")
export default class HzdController {
  @operation({
    summary: "Get Hzd",
  })
  @get()
  static getHzd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzd",
  })
  @post("{id}")
  static createHzd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
