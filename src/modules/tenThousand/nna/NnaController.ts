import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nna")
export default class NnaController {
  @operation({
    summary: "Get Nna",
  })
  @get()
  static getNna = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nna",
  })
  @post("{id}")
  static createNna = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
