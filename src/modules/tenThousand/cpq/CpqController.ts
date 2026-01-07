import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpq")
export default class CpqController {
  @operation({
    summary: "Get Cpq",
  })
  @get()
  static getCpq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpq",
  })
  @post("{id}")
  static createCpq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
