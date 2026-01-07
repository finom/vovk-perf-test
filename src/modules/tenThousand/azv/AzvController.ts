import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azv")
export default class AzvController {
  @operation({
    summary: "Get Azv",
  })
  @get()
  static getAzv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azv",
  })
  @post("{id}")
  static createAzv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
