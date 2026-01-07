import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqx")
export default class IqxController {
  @operation({
    summary: "Get Iqx",
  })
  @get()
  static getIqx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqx",
  })
  @post("{id}")
  static createIqx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
