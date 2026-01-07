import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ays")
export default class AysController {
  @operation({
    summary: "Get Ays",
  })
  @get()
  static getAys = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ays",
  })
  @post("{id}")
  static createAys = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
