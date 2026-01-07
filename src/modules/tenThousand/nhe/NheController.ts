import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhe")
export default class NheController {
  @operation({
    summary: "Get Nhe",
  })
  @get()
  static getNhe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhe",
  })
  @post("{id}")
  static createNhe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
