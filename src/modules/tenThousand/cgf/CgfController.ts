import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgf")
export default class CgfController {
  @operation({
    summary: "Get Cgf",
  })
  @get()
  static getCgf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgf",
  })
  @post("{id}")
  static createCgf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
