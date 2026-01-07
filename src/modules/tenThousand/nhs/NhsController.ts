import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhs")
export default class NhsController {
  @operation({
    summary: "Get Nhs",
  })
  @get()
  static getNhs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhs",
  })
  @post("{id}")
  static createNhs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
