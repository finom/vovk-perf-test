import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gdx")
export default class GdxController {
  @operation({
    summary: "Get Gdx",
  })
  @get()
  static getGdx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdx",
  })
  @post("{id}")
  static createGdx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
