import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cir")
export default class CirController {
  @operation({
    summary: "Get Cir",
  })
  @get()
  static getCir = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cir",
  })
  @post("{id}")
  static createCir = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
