import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aac")
export default class AacController {
  @operation({
    summary: "Get Aac",
  })
  @get()
  static getAac = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aac",
  })
  @post("{id}")
  static createAac = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
