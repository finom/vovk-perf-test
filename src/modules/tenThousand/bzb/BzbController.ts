import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzb")
export default class BzbController {
  @operation({
    summary: "Get Bzb",
  })
  @get()
  static getBzb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzb",
  })
  @post("{id}")
  static createBzb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
