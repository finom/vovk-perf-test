import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cij")
export default class CijController {
  @operation({
    summary: "Get Cij",
  })
  @get()
  static getCij = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cij",
  })
  @post("{id}")
  static createCij = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
