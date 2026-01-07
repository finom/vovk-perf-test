import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gte")
export default class GteController {
  @operation({
    summary: "Get Gte",
  })
  @get()
  static getGte = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gte",
  })
  @post("{id}")
  static createGte = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
