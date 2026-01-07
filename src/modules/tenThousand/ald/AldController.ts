import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ald")
export default class AldController {
  @operation({
    summary: "Get Ald",
  })
  @get()
  static getAld = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ald",
  })
  @post("{id}")
  static createAld = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
