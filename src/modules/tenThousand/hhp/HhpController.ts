import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hhp")
export default class HhpController {
  @operation({
    summary: "Get Hhp",
  })
  @get()
  static getHhp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhp",
  })
  @post("{id}")
  static createHhp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
