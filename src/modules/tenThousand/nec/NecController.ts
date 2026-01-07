import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nec")
export default class NecController {
  @operation({
    summary: "Get Nec",
  })
  @get()
  static getNec = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nec",
  })
  @post("{id}")
  static createNec = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
