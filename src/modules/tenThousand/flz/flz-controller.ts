import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("flz")
export default class FlzController {
  @operation({
    summary: "Get Flz",
  })
  @get()
  static getFlz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Flz",
  })
  @post("{id}")
  static createFlz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
