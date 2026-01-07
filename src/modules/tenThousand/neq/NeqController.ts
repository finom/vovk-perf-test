import { procedure, prefix, get, post, operation } from "vovk";

@prefix("neq")
export default class NeqController {
  @operation({
    summary: "Get Neq",
  })
  @get()
  static getNeq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Neq",
  })
  @post("{id}")
  static createNeq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
