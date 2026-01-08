import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hpz")
export default class HpzController {
  @operation({
    summary: "Get Hpz",
  })
  @get()
  static getHpz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpz",
  })
  @post("{id}")
  static createHpz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
