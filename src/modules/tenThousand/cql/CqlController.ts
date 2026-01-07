import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cql")
export default class CqlController {
  @operation({
    summary: "Get Cql",
  })
  @get()
  static getCql = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cql",
  })
  @post("{id}")
  static createCql = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
