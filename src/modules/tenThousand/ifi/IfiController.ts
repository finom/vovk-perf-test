import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifi")
export default class IfiController {
  @operation({
    summary: "Get Ifi",
  })
  @get()
  static getIfi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifi",
  })
  @post("{id}")
  static createIfi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
