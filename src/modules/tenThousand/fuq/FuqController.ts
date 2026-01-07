import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuq")
export default class FuqController {
  @operation({
    summary: "Get Fuq",
  })
  @get()
  static getFuq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fuq",
  })
  @post("{id}")
  static createFuq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
