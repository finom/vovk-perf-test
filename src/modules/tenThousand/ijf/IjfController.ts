import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijf")
export default class IjfController {
  @operation({
    summary: "Get Ijf",
  })
  @get()
  static getIjf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijf",
  })
  @post("{id}")
  static createIjf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
