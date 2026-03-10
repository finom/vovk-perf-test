import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hpg")
export default class HpgController {
  @operation({
    summary: "Get Hpg",
  })
  @get()
  static getHpg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hpg",
  })
  @post("{id}")
  static createHpg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
