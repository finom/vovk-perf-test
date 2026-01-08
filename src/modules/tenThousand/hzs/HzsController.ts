import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hzs")
export default class HzsController {
  @operation({
    summary: "Get Hzs",
  })
  @get()
  static getHzs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzs",
  })
  @post("{id}")
  static createHzs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
