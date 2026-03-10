import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lvw")
export default class LvwController {
  @operation({
    summary: "Get Lvw",
  })
  @get()
  static getLvw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lvw",
  })
  @post("{id}")
  static createLvw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
