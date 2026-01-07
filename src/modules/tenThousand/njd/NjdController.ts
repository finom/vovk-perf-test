import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njd")
export default class NjdController {
  @operation({
    summary: "Get Njd",
  })
  @get()
  static getNjd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njd",
  })
  @post("{id}")
  static createNjd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
