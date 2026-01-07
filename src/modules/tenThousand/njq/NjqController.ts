import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njq")
export default class NjqController {
  @operation({
    summary: "Get Njq",
  })
  @get()
  static getNjq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njq",
  })
  @post("{id}")
  static createNjq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
