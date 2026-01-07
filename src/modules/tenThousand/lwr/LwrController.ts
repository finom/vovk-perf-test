import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwr")
export default class LwrController {
  @operation({
    summary: "Get Lwr",
  })
  @get()
  static getLwr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwr",
  })
  @post("{id}")
  static createLwr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
