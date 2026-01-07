import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atx")
export default class AtxController {
  @operation({
    summary: "Get Atx",
  })
  @get()
  static getAtx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Atx",
  })
  @post("{id}")
  static createAtx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
