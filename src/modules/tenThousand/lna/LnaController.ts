import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lna")
export default class LnaController {
  @operation({
    summary: "Get Lna",
  })
  @get()
  static getLna = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lna",
  })
  @post("{id}")
  static createLna = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
