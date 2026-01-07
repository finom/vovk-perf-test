import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdf")
export default class KdfController {
  @operation({
    summary: "Get Kdf",
  })
  @get()
  static getKdf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdf",
  })
  @post("{id}")
  static createKdf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
