import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkl")
export default class DklController {
  @operation({
    summary: "Get Dkl",
  })
  @get()
  static getDkl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkl",
  })
  @post("{id}")
  static createDkl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
