import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hm")
export default class HmController {
  @operation({
    summary: "Get Hm",
  })
  @get()
  static getHm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hm",
  })
  @post("{id}")
  static createHm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
