import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("emh")
export default class EmhController {
  @operation({
    summary: "Get Emh",
  })
  @get()
  static getEmh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Emh",
  })
  @post("{id}")
  static createEmh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
