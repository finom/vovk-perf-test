import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgn")
export default class CgnController {
  @operation({
    summary: "Get Cgn",
  })
  @get()
  static getCgn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgn",
  })
  @post("{id}")
  static createCgn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
