import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpp")
export default class LppController {
  @operation({
    summary: "Get Lpp",
  })
  @get()
  static getLpp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpp",
  })
  @post("{id}")
  static createLpp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
