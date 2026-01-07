import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntk")
export default class NtkController {
  @operation({
    summary: "Get Ntk",
  })
  @get()
  static getNtk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ntk",
  })
  @post("{id}")
  static createNtk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
