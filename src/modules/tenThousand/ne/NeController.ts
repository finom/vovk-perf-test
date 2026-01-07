import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ne")
export default class NeController {
  @operation({
    summary: "Get Ne",
  })
  @get()
  static getNe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ne",
  })
  @post("{id}")
  static createNe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
