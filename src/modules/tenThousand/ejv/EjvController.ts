import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejv")
export default class EjvController {
  @operation({
    summary: "Get Ejv",
  })
  @get()
  static getEjv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejv",
  })
  @post("{id}")
  static createEjv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
