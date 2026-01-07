import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fse")
export default class FseController {
  @operation({
    summary: "Get Fse",
  })
  @get()
  static getFse = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fse",
  })
  @post("{id}")
  static createFse = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
