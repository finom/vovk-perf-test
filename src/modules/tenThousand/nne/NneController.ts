import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nne")
export default class NneController {
  @operation({
    summary: "Get Nne",
  })
  @get()
  static getNne = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nne",
  })
  @post("{id}")
  static createNne = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
