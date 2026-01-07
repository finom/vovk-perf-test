import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nck")
export default class NckController {
  @operation({
    summary: "Get Nck",
  })
  @get()
  static getNck = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nck",
  })
  @post("{id}")
  static createNck = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
