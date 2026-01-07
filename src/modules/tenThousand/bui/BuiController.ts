import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bui")
export default class BuiController {
  @operation({
    summary: "Get Bui",
  })
  @get()
  static getBui = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bui",
  })
  @post("{id}")
  static createBui = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
