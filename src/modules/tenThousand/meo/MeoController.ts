import { procedure, prefix, get, post, operation } from "vovk";

@prefix("meo")
export default class MeoController {
  @operation({
    summary: "Get Meo",
  })
  @get()
  static getMeo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Meo",
  })
  @post("{id}")
  static createMeo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
