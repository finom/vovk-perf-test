import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhr")
export default class NhrController {
  @operation({
    summary: "Get Nhr",
  })
  @get()
  static getNhr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhr",
  })
  @post("{id}")
  static createNhr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
