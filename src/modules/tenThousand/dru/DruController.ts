import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dru")
export default class DruController {
  @operation({
    summary: "Get Dru",
  })
  @get()
  static getDru = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dru",
  })
  @post("{id}")
  static createDru = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
