import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdg")
export default class GdgController {
  @operation({
    summary: "Get Gdg",
  })
  @get()
  static getGdg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdg",
  })
  @post("{id}")
  static createGdg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
