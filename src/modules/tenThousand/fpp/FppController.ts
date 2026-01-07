import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpp")
export default class FppController {
  @operation({
    summary: "Get Fpp",
  })
  @get()
  static getFpp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpp",
  })
  @post("{id}")
  static createFpp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
