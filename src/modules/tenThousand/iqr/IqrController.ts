import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqr")
export default class IqrController {
  @operation({
    summary: "Get Iqr",
  })
  @get()
  static getIqr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqr",
  })
  @post("{id}")
  static createIqr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
