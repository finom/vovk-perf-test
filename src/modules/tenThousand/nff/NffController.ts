import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nff")
export default class NffController {
  @operation({
    summary: "Get Nff",
  })
  @get()
  static getNff = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nff",
  })
  @post("{id}")
  static createNff = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
