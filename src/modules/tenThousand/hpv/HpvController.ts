import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hpv")
export default class HpvController {
  @operation({
    summary: "Get Hpv",
  })
  @get()
  static getHpv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpv",
  })
  @post("{id}")
  static createHpv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
