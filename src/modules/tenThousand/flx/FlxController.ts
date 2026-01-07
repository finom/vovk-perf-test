import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flx")
export default class FlxController {
  @operation({
    summary: "Get Flx",
  })
  @get()
  static getFlx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flx",
  })
  @post("{id}")
  static createFlx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
