import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azl")
export default class AzlController {
  @operation({
    summary: "Get Azl",
  })
  @get()
  static getAzl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azl",
  })
  @post("{id}")
  static createAzl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
