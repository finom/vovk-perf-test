import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmu")
export default class NmuController {
  @operation({
    summary: "Get Nmu",
  })
  @get()
  static getNmu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmu",
  })
  @post("{id}")
  static createNmu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
