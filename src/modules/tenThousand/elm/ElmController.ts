import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elm")
export default class ElmController {
  @operation({
    summary: "Get Elm",
  })
  @get()
  static getElm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elm",
  })
  @post("{id}")
  static createElm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
