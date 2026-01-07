import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pz")
export default class PzController {
  @operation({
    summary: "Get Pz",
  })
  @get()
  static getPz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pz",
  })
  @post("{id}")
  static createPz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
