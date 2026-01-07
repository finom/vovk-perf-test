import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atb")
export default class AtbController {
  @operation({
    summary: "Get Atb",
  })
  @get()
  static getAtb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Atb",
  })
  @post("{id}")
  static createAtb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
