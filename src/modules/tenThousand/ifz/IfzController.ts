import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifz")
export default class IfzController {
  @operation({
    summary: "Get Ifz",
  })
  @get()
  static getIfz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifz",
  })
  @post("{id}")
  static createIfz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
