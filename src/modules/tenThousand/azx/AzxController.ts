import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azx")
export default class AzxController {
  @operation({
    summary: "Get Azx",
  })
  @get()
  static getAzx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azx",
  })
  @post("{id}")
  static createAzx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
