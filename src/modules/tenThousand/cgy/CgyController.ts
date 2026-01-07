import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgy")
export default class CgyController {
  @operation({
    summary: "Get Cgy",
  })
  @get()
  static getCgy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgy",
  })
  @post("{id}")
  static createCgy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
