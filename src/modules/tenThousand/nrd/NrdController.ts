import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrd")
export default class NrdController {
  @operation({
    summary: "Get Nrd",
  })
  @get()
  static getNrd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrd",
  })
  @post("{id}")
  static createNrd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
