import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("emz")
export default class EmzController {
  @operation({
    summary: "Get Emz",
  })
  @get()
  static getEmz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Emz",
  })
  @post("{id}")
  static createEmz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
