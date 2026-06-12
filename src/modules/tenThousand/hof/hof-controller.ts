import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hof")
export default class HofController {
  @operation({
    summary: "Get Hof",
  })
  @get()
  static getHof = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hof",
  })
  @post("{id}")
  static createHof = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
