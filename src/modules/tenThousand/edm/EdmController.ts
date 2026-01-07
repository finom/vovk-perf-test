import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edm")
export default class EdmController {
  @operation({
    summary: "Get Edm",
  })
  @get()
  static getEdm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edm",
  })
  @post("{id}")
  static createEdm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
