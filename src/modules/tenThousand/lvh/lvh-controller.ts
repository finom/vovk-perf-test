import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lvh")
export default class LvhController {
  @operation({
    summary: "Get Lvh",
  })
  @get()
  static getLvh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lvh",
  })
  @post("{id}")
  static createLvh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
