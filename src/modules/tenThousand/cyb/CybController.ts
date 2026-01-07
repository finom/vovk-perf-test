import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyb")
export default class CybController {
  @operation({
    summary: "Get Cyb",
  })
  @get()
  static getCyb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyb",
  })
  @post("{id}")
  static createCyb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
