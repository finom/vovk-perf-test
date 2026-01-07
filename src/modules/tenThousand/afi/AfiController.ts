import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afi")
export default class AfiController {
  @operation({
    summary: "Get Afi",
  })
  @get()
  static getAfi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afi",
  })
  @post("{id}")
  static createAfi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
