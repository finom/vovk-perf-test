import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dov")
export default class DovController {
  @operation({
    summary: "Get Dov",
  })
  @get()
  static getDov = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dov",
  })
  @post("{id}")
  static createDov = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
