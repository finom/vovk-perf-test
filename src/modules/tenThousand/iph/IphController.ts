import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iph")
export default class IphController {
  @operation({
    summary: "Get Iph",
  })
  @get()
  static getIph = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iph",
  })
  @post("{id}")
  static createIph = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
