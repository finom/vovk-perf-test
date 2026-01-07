import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dql")
export default class DqlController {
  @operation({
    summary: "Get Dql",
  })
  @get()
  static getDql = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dql",
  })
  @post("{id}")
  static createDql = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
