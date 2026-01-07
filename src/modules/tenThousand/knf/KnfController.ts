import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knf")
export default class KnfController {
  @operation({
    summary: "Get Knf",
  })
  @get()
  static getKnf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knf",
  })
  @post("{id}")
  static createKnf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
