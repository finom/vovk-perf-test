import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwt")
export default class GwtController {
  @operation({
    summary: "Get Gwt",
  })
  @get()
  static getGwt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwt",
  })
  @post("{id}")
  static createGwt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
