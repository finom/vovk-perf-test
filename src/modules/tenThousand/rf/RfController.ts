import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rf")
export default class RfController {
  @operation({
    summary: "Get Rf",
  })
  @get()
  static getRf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rf",
  })
  @post("{id}")
  static createRf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
