import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzv")
export default class KzvController {
  @operation({
    summary: "Get Kzv",
  })
  @get()
  static getKzv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzv",
  })
  @post("{id}")
  static createKzv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
