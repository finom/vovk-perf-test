import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqn")
export default class IqnController {
  @operation({
    summary: "Get Iqn",
  })
  @get()
  static getIqn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqn",
  })
  @post("{id}")
  static createIqn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
