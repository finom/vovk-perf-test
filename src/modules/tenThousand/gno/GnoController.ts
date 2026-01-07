import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gno")
export default class GnoController {
  @operation({
    summary: "Get Gno",
  })
  @get()
  static getGno = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gno",
  })
  @post("{id}")
  static createGno = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
