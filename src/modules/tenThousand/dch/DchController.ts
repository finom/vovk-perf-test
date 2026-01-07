import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dch")
export default class DchController {
  @operation({
    summary: "Get Dch",
  })
  @get()
  static getDch = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dch",
  })
  @post("{id}")
  static createDch = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
