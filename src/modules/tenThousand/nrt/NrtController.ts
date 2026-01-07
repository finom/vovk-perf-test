import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrt")
export default class NrtController {
  @operation({
    summary: "Get Nrt",
  })
  @get()
  static getNrt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrt",
  })
  @post("{id}")
  static createNrt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
