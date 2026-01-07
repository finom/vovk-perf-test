import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgl")
export default class CglController {
  @operation({
    summary: "Get Cgl",
  })
  @get()
  static getCgl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgl",
  })
  @post("{id}")
  static createCgl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
