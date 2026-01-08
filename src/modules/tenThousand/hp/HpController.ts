import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hp")
export default class HpController {
  @operation({
    summary: "Get Hp",
  })
  @get()
  static getHp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hp",
  })
  @post("{id}")
  static createHp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
