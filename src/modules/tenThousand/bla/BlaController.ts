import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bla")
export default class BlaController {
  @operation({
    summary: "Get Bla",
  })
  @get()
  static getBla = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bla",
  })
  @post("{id}")
  static createBla = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
