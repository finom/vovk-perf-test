import { procedure, prefix, get, post, operation } from "vovk";

@prefix("div")
export default class DivController {
  @operation({
    summary: "Get Div",
  })
  @get()
  static getDiv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Div",
  })
  @post("{id}")
  static createDiv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
