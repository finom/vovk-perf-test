import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnh")
export default class CnhController {
  @operation({
    summary: "Get Cnh",
  })
  @get()
  static getCnh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnh",
  })
  @post("{id}")
  static createCnh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
