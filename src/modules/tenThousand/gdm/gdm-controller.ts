import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gdm")
export default class GdmController {
  @operation({
    summary: "Get Gdm",
  })
  @get()
  static getGdm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gdm",
  })
  @post("{id}")
  static createGdm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
