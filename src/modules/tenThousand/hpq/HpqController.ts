import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hpq")
export default class HpqController {
  @operation({
    summary: "Get Hpq",
  })
  @get()
  static getHpq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpq",
  })
  @post("{id}")
  static createHpq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
