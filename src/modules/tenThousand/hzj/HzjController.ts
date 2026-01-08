import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hzj")
export default class HzjController {
  @operation({
    summary: "Get Hzj",
  })
  @get()
  static getHzj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzj",
  })
  @post("{id}")
  static createHzj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
