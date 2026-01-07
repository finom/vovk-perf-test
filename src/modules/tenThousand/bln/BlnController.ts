import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bln")
export default class BlnController {
  @operation({
    summary: "Get Bln",
  })
  @get()
  static getBln = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bln",
  })
  @post("{id}")
  static createBln = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
