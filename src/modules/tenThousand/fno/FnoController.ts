import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fno")
export default class FnoController {
  @operation({
    summary: "Get Fno",
  })
  @get()
  static getFno = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fno",
  })
  @post("{id}")
  static createFno = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
