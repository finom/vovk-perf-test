import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmh")
export default class CmhController {
  @operation({
    summary: "Get Cmh",
  })
  @get()
  static getCmh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmh",
  })
  @post("{id}")
  static createCmh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
