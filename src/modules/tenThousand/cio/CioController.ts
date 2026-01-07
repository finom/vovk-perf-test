import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cio")
export default class CioController {
  @operation({
    summary: "Get Cio",
  })
  @get()
  static getCio = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cio",
  })
  @post("{id}")
  static createCio = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
