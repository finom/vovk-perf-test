import { procedure, prefix, get, post, operation } from "vovk";

@prefix("neh")
export default class NehController {
  @operation({
    summary: "Get Neh",
  })
  @get()
  static getNeh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Neh",
  })
  @post("{id}")
  static createNeh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
