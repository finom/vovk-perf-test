import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpg")
export default class GpgController {
  @operation({
    summary: "Get Gpg",
  })
  @get()
  static getGpg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpg",
  })
  @post("{id}")
  static createGpg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
