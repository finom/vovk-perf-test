import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bve")
export default class BveController {
  @operation({
    summary: "Get Bve",
  })
  @get()
  static getBve = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bve",
  })
  @post("{id}")
  static createBve = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
