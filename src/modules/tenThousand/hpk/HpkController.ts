import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hpk")
export default class HpkController {
  @operation({
    summary: "Get Hpk",
  })
  @get()
  static getHpk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpk",
  })
  @post("{id}")
  static createHpk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
