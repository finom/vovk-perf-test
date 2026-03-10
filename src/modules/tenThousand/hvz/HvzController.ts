import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hvz")
export default class HvzController {
  @operation({
    summary: "Get Hvz",
  })
  @get()
  static getHvz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hvz",
  })
  @post("{id}")
  static createHvz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
