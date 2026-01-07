import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inn")
export default class InnController {
  @operation({
    summary: "Get Inn",
  })
  @get()
  static getInn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Inn",
  })
  @post("{id}")
  static createInn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
