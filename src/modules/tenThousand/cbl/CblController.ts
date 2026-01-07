import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbl")
export default class CblController {
  @operation({
    summary: "Get Cbl",
  })
  @get()
  static getCbl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbl",
  })
  @post("{id}")
  static createCbl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
