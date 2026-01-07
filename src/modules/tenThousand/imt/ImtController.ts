import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imt")
export default class ImtController {
  @operation({
    summary: "Get Imt",
  })
  @get()
  static getImt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imt",
  })
  @post("{id}")
  static createImt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
