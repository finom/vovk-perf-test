import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzb")
export default class MzbController {
  @operation({
    summary: "Get Mzb",
  })
  @get()
  static getMzb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzb",
  })
  @post("{id}")
  static createMzb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
