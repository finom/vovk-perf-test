import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddl")
export default class DdlController {
  @operation({
    summary: "Get Ddl",
  })
  @get()
  static getDdl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddl",
  })
  @post("{id}")
  static createDdl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
