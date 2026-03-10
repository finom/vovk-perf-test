import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("adw")
export default class AdwController {
  @operation({
    summary: "Get Adw",
  })
  @get()
  static getAdw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Adw",
  })
  @post("{id}")
  static createAdw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
