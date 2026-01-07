import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aoy")
export default class AoyController {
  @operation({
    summary: "Get Aoy",
  })
  @get()
  static getAoy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aoy",
  })
  @post("{id}")
  static createAoy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
