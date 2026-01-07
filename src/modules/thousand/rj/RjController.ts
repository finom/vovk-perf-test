import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rj")
export default class RjController {
  @operation({
    summary: "Get Rj",
  })
  @get()
  static getRj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rj",
  })
  @post("{id}")
  static createRj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
