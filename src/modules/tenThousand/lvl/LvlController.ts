import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lvl")
export default class LvlController {
  @operation({
    summary: "Get Lvl",
  })
  @get()
  static getLvl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lvl",
  })
  @post("{id}")
  static createLvl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
