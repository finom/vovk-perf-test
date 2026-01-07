import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nby")
export default class NbyController {
  @operation({
    summary: "Get Nby",
  })
  @get()
  static getNby = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nby",
  })
  @post("{id}")
  static createNby = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
