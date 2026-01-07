import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpp")
export default class HppController {
  @operation({
    summary: "Get Hpp",
  })
  @get()
  static getHpp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpp",
  })
  @post("{id}")
  static createHpp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
