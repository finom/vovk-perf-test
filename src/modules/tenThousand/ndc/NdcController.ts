import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndc")
export default class NdcController {
  @operation({
    summary: "Get Ndc",
  })
  @get()
  static getNdc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndc",
  })
  @post("{id}")
  static createNdc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
