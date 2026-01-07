import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzm")
export default class KzmController {
  @operation({
    summary: "Get Kzm",
  })
  @get()
  static getKzm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzm",
  })
  @post("{id}")
  static createKzm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
