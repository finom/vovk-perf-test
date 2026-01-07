import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nc")
export default class NcController {
  @operation({
    summary: "Get Nc",
  })
  @get()
  static getNc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nc",
  })
  @post("{id}")
  static createNc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
