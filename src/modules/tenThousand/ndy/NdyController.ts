import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndy")
export default class NdyController {
  @operation({
    summary: "Get Ndy",
  })
  @get()
  static getNdy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndy",
  })
  @post("{id}")
  static createNdy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
