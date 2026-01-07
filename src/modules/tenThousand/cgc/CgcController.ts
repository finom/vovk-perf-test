import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgc")
export default class CgcController {
  @operation({
    summary: "Get Cgc",
  })
  @get()
  static getCgc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgc",
  })
  @post("{id}")
  static createCgc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
