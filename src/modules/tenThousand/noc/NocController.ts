import { procedure, prefix, get, post, operation } from "vovk";

@prefix("noc")
export default class NocController {
  @operation({
    summary: "Get Noc",
  })
  @get()
  static getNoc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Noc",
  })
  @post("{id}")
  static createNoc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
