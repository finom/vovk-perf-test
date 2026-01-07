import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhe")
export default class DheController {
  @operation({
    summary: "Get Dhe",
  })
  @get()
  static getDhe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhe",
  })
  @post("{id}")
  static createDhe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
