import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hpw")
export default class HpwController {
  @operation({
    summary: "Get Hpw",
  })
  @get()
  static getHpw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpw",
  })
  @post("{id}")
  static createHpw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
