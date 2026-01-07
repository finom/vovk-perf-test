import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npe")
export default class NpeController {
  @operation({
    summary: "Get Npe",
  })
  @get()
  static getNpe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npe",
  })
  @post("{id}")
  static createNpe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
