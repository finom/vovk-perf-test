import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gdl")
export default class GdlController {
  @operation({
    summary: "Get Gdl",
  })
  @get()
  static getGdl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gdl",
  })
  @post("{id}")
  static createGdl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
