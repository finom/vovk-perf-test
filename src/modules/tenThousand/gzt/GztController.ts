import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzt")
export default class GztController {
  @operation({
    summary: "Get Gzt",
  })
  @get()
  static getGzt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzt",
  })
  @post("{id}")
  static createGzt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
