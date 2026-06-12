import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hvy")
export default class HvyController {
  @operation({
    summary: "Get Hvy",
  })
  @get()
  static getHvy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hvy",
  })
  @post("{id}")
  static createHvy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
