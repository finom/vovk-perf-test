import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdm")
export default class GdmController {
  @operation({
    summary: "Get Gdm",
  })
  @get()
  static getGdm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdm",
  })
  @post("{id}")
  static createGdm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
