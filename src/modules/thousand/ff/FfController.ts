import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ff")
export default class FfController {
  @operation({
    summary: "Get Ff",
  })
  @get()
  static getFf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ff",
  })
  @post("{id}")
  static createFf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
