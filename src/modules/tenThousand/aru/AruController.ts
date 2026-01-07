import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aru")
export default class AruController {
  @operation({
    summary: "Get Aru",
  })
  @get()
  static getAru = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aru",
  })
  @post("{id}")
  static createAru = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
