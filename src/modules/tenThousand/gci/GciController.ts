import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gci")
export default class GciController {
  @operation({
    summary: "Get Gci",
  })
  @get()
  static getGci = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gci",
  })
  @post("{id}")
  static createGci = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
