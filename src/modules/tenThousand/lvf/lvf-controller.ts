import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lvf")
export default class LvfController {
  @operation({
    summary: "Get Lvf",
  })
  @get()
  static getLvf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lvf",
  })
  @post("{id}")
  static createLvf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
