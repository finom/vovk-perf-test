import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ece")
export default class EceController {
  @operation({
    summary: "Get Ece",
  })
  @get()
  static getEce = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ece",
  })
  @post("{id}")
  static createEce = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
