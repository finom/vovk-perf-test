import { procedure, prefix, get, post, operation } from "vovk";

@prefix("deo")
export default class DeoController {
  @operation({
    summary: "Get Deo",
  })
  @get()
  static getDeo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Deo",
  })
  @post("{id}")
  static createDeo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
