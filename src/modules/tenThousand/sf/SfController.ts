import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sf")
export default class SfController {
  @operation({
    summary: "Get Sf",
  })
  @get()
  static getSf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sf",
  })
  @post("{id}")
  static createSf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
