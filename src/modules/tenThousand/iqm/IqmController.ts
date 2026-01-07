import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqm")
export default class IqmController {
  @operation({
    summary: "Get Iqm",
  })
  @get()
  static getIqm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqm",
  })
  @post("{id}")
  static createIqm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
