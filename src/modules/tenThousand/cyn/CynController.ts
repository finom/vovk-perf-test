import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyn")
export default class CynController {
  @operation({
    summary: "Get Cyn",
  })
  @get()
  static getCyn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyn",
  })
  @post("{id}")
  static createCyn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
