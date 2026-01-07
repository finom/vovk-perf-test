import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fca")
export default class FcaController {
  @operation({
    summary: "Get Fca",
  })
  @get()
  static getFca = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fca",
  })
  @post("{id}")
  static createFca = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
