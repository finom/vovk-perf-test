import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqo")
export default class IqoController {
  @operation({
    summary: "Get Iqo",
  })
  @get()
  static getIqo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqo",
  })
  @post("{id}")
  static createIqo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
