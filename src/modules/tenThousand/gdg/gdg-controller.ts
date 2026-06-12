import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gdg")
export default class GdgController {
  @operation({
    summary: "Get Gdg",
  })
  @get()
  static getGdg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gdg",
  })
  @post("{id}")
  static createGdg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
