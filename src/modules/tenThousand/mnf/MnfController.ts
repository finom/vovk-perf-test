import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnf")
export default class MnfController {
  @operation({
    summary: "Get Mnf",
  })
  @get()
  static getMnf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnf",
  })
  @post("{id}")
  static createMnf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
