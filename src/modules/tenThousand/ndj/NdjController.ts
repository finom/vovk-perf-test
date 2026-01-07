import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndj")
export default class NdjController {
  @operation({
    summary: "Get Ndj",
  })
  @get()
  static getNdj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndj",
  })
  @post("{id}")
  static createNdj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
