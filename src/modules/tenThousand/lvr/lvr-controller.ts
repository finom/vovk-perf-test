import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lvr")
export default class LvrController {
  @operation({
    summary: "Get Lvr",
  })
  @get()
  static getLvr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lvr",
  })
  @post("{id}")
  static createLvr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
