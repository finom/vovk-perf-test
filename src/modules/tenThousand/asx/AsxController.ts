import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asx")
export default class AsxController {
  @operation({
    summary: "Get Asx",
  })
  @get()
  static getAsx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asx",
  })
  @post("{id}")
  static createAsx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
