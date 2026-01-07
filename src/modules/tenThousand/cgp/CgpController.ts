import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgp")
export default class CgpController {
  @operation({
    summary: "Get Cgp",
  })
  @get()
  static getCgp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgp",
  })
  @post("{id}")
  static createCgp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
