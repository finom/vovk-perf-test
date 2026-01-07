import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eee")
export default class EeeController {
  @operation({
    summary: "Get Eee",
  })
  @get()
  static getEee = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eee",
  })
  @post("{id}")
  static createEee = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
