import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqh")
export default class IqhController {
  @operation({
    summary: "Get Iqh",
  })
  @get()
  static getIqh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqh",
  })
  @post("{id}")
  static createIqh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
