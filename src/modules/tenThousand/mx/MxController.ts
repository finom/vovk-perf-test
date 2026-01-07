import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mx")
export default class MxController {
  @operation({
    summary: "Get Mx",
  })
  @get()
  static getMx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mx",
  })
  @post("{id}")
  static createMx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
