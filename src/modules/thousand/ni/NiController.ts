import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ni")
export default class NiController {
  @operation({
    summary: "Get Ni",
  })
  @get()
  static getNi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ni",
  })
  @post("{id}")
  static createNi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
