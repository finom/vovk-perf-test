import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azh")
export default class AzhController {
  @operation({
    summary: "Get Azh",
  })
  @get()
  static getAzh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azh",
  })
  @post("{id}")
  static createAzh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
