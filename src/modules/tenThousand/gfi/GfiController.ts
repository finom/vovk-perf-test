import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfi")
export default class GfiController {
  @operation({
    summary: "Get Gfi",
  })
  @get()
  static getGfi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfi",
  })
  @post("{id}")
  static createGfi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
