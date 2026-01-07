import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgd")
export default class CgdController {
  @operation({
    summary: "Get Cgd",
  })
  @get()
  static getCgd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgd",
  })
  @post("{id}")
  static createCgd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
