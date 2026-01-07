import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bny")
export default class BnyController {
  @operation({
    summary: "Get Bny",
  })
  @get()
  static getBny = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bny",
  })
  @post("{id}")
  static createBny = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
