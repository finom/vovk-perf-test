import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzu")
export default class DzuController {
  @operation({
    summary: "Get Dzu",
  })
  @get()
  static getDzu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzu",
  })
  @post("{id}")
  static createDzu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
