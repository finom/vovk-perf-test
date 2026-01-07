import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jun")
export default class JunController {
  @operation({
    summary: "Get Jun",
  })
  @get()
  static getJun = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jun",
  })
  @post("{id}")
  static createJun = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
