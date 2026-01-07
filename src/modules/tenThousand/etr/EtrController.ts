import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etr")
export default class EtrController {
  @operation({
    summary: "Get Etr",
  })
  @get()
  static getEtr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etr",
  })
  @post("{id}")
  static createEtr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
