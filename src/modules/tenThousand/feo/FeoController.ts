import { procedure, prefix, get, post, operation } from "vovk";

@prefix("feo")
export default class FeoController {
  @operation({
    summary: "Get Feo",
  })
  @get()
  static getFeo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Feo",
  })
  @post("{id}")
  static createFeo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
