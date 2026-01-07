import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvc")
export default class LvcController {
  @operation({
    summary: "Get Lvc",
  })
  @get()
  static getLvc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvc",
  })
  @post("{id}")
  static createLvc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
