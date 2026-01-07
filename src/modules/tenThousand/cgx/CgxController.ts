import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgx")
export default class CgxController {
  @operation({
    summary: "Get Cgx",
  })
  @get()
  static getCgx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgx",
  })
  @post("{id}")
  static createCgx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
