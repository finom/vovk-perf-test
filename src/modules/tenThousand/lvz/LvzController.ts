import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lvz")
export default class LvzController {
  @operation({
    summary: "Get Lvz",
  })
  @get()
  static getLvz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lvz",
  })
  @post("{id}")
  static createLvz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
