import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njw")
export default class NjwController {
  @operation({
    summary: "Get Njw",
  })
  @get()
  static getNjw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njw",
  })
  @post("{id}")
  static createNjw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
