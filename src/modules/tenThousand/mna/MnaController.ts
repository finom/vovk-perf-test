import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mna")
export default class MnaController {
  @operation({
    summary: "Get Mna",
  })
  @get()
  static getMna = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mna",
  })
  @post("{id}")
  static createMna = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
