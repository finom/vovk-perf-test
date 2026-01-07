import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahn")
export default class AhnController {
  @operation({
    summary: "Get Ahn",
  })
  @get()
  static getAhn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahn",
  })
  @post("{id}")
  static createAhn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
