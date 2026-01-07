import { procedure, prefix, get, post, operation } from "vovk";

@prefix("og")
export default class OgController {
  @operation({
    summary: "Get Og",
  })
  @get()
  static getOg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Og",
  })
  @post("{id}")
  static createOg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
