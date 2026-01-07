import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kms")
export default class KmsController {
  @operation({
    summary: "Get Kms",
  })
  @get()
  static getKms = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kms",
  })
  @post("{id}")
  static createKms = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
