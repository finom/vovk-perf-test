import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njv")
export default class NjvController {
  @operation({
    summary: "Get Njv",
  })
  @get()
  static getNjv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njv",
  })
  @post("{id}")
  static createNjv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
