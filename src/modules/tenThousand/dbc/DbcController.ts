import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbc")
export default class DbcController {
  @operation({
    summary: "Get Dbc",
  })
  @get()
  static getDbc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbc",
  })
  @post("{id}")
  static createDbc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
