import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tr")
export default class TrController {
  @operation({
    summary: "Get Tr",
  })
  @get()
  static getTr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tr",
  })
  @post("{id}")
  static createTr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
