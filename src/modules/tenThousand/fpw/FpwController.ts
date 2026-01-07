import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpw")
export default class FpwController {
  @operation({
    summary: "Get Fpw",
  })
  @get()
  static getFpw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpw",
  })
  @post("{id}")
  static createFpw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
