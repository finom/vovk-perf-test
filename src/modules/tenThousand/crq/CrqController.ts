import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crq")
export default class CrqController {
  @operation({
    summary: "Get Crq",
  })
  @get()
  static getCrq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crq",
  })
  @post("{id}")
  static createCrq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
