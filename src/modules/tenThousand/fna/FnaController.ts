import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fna")
export default class FnaController {
  @operation({
    summary: "Get Fna",
  })
  @get()
  static getFna = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fna",
  })
  @post("{id}")
  static createFna = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
