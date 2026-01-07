import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inf")
export default class InfController {
  @operation({
    summary: "Get Inf",
  })
  @get()
  static getInf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Inf",
  })
  @post("{id}")
  static createInf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
