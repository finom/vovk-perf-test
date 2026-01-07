import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aii")
export default class AiiController {
  @operation({
    summary: "Get Aii",
  })
  @get()
  static getAii = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aii",
  })
  @post("{id}")
  static createAii = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
