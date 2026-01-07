import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cug")
export default class CugController {
  @operation({
    summary: "Get Cug",
  })
  @get()
  static getCug = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cug",
  })
  @post("{id}")
  static createCug = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
