import { procedure, prefix, get, post, operation } from "vovk";

@prefix("su")
export default class SuController {
  @operation({
    summary: "Get Su",
  })
  @get()
  static getSu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Su",
  })
  @post("{id}")
  static createSu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
