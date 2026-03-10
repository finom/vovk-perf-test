import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("blz")
export default class BlzController {
  @operation({
    summary: "Get Blz",
  })
  @get()
  static getBlz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Blz",
  })
  @post("{id}")
  static createBlz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
