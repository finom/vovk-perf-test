import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyz")
export default class CyzController {
  @operation({
    summary: "Get Cyz",
  })
  @get()
  static getCyz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyz",
  })
  @post("{id}")
  static createCyz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
