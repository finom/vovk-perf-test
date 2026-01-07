import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcz")
export default class FczController {
  @operation({
    summary: "Get Fcz",
  })
  @get()
  static getFcz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcz",
  })
  @post("{id}")
  static createFcz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
