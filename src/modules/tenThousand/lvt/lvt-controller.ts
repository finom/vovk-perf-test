import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lvt")
export default class LvtController {
  @operation({
    summary: "Get Lvt",
  })
  @get()
  static getLvt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lvt",
  })
  @post("{id}")
  static createLvt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
