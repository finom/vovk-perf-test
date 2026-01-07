import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsk")
export default class NskController {
  @operation({
    summary: "Get Nsk",
  })
  @get()
  static getNsk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsk",
  })
  @post("{id}")
  static createNsk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
