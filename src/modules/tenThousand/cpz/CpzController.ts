import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpz")
export default class CpzController {
  @operation({
    summary: "Get Cpz",
  })
  @get()
  static getCpz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpz",
  })
  @post("{id}")
  static createCpz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
