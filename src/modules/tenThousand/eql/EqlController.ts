import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eql")
export default class EqlController {
  @operation({
    summary: "Get Eql",
  })
  @get()
  static getEql = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eql",
  })
  @post("{id}")
  static createEql = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
