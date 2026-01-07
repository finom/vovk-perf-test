import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njn")
export default class NjnController {
  @operation({
    summary: "Get Njn",
  })
  @get()
  static getNjn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njn",
  })
  @post("{id}")
  static createNjn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
