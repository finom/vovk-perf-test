import { procedure, prefix, get, post, operation } from "vovk";

@prefix("its")
export default class ItsController {
  @operation({
    summary: "Get Its",
  })
  @get()
  static getIts = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Its",
  })
  @post("{id}")
  static createIts = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
