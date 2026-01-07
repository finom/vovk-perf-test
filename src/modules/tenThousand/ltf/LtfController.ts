import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltf")
export default class LtfController {
  @operation({
    summary: "Get Ltf",
  })
  @get()
  static getLtf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltf",
  })
  @post("{id}")
  static createLtf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
