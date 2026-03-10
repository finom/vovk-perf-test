import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dmg")
export default class DmgController {
  @operation({
    summary: "Get Dmg",
  })
  @get()
  static getDmg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dmg",
  })
  @post("{id}")
  static createDmg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
