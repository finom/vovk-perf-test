import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbt")
export default class DbtController {
  @operation({
    summary: "Get Dbt",
  })
  @get()
  static getDbt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbt",
  })
  @post("{id}")
  static createDbt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
