import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijq")
export default class IjqController {
  @operation({
    summary: "Get Ijq",
  })
  @get()
  static getIjq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijq",
  })
  @post("{id}")
  static createIjq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
