import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aun")
export default class AunController {
  @operation({
    summary: "Get Aun",
  })
  @get()
  static getAun = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aun",
  })
  @post("{id}")
  static createAun = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
