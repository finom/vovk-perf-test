import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blf")
export default class BlfController {
  @operation({
    summary: "Get Blf",
  })
  @get()
  static getBlf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Blf",
  })
  @post("{id}")
  static createBlf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
