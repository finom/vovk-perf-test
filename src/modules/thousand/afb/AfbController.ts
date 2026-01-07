import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afb")
export default class AfbController {
  @operation({
    summary: "Get Afb",
  })
  @get()
  static getAfb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afb",
  })
  @post("{id}")
  static createAfb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
