import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gdv")
export default class GdvController {
  @operation({
    summary: "Get Gdv",
  })
  @get()
  static getGdv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gdv",
  })
  @post("{id}")
  static createGdv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
