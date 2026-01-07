import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgv")
export default class CgvController {
  @operation({
    summary: "Get Cgv",
  })
  @get()
  static getCgv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgv",
  })
  @post("{id}")
  static createCgv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
