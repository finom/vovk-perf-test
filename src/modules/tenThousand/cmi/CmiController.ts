import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmi")
export default class CmiController {
  @operation({
    summary: "Get Cmi",
  })
  @get()
  static getCmi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmi",
  })
  @post("{id}")
  static createCmi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
