import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkp")
export default class MkpController {
  @operation({
    summary: "Get Mkp",
  })
  @get()
  static getMkp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkp",
  })
  @post("{id}")
  static createMkp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
