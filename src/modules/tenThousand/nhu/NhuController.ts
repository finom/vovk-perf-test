import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhu")
export default class NhuController {
  @operation({
    summary: "Get Nhu",
  })
  @get()
  static getNhu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhu",
  })
  @post("{id}")
  static createNhu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
