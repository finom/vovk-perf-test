import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duk")
export default class DukController {
  @operation({
    summary: "Get Duk",
  })
  @get()
  static getDuk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Duk",
  })
  @post("{id}")
  static createDuk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
