import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ar")
export default class ArController {
  @operation({
    summary: "Get Ar",
  })
  @get()
  static getAr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ar",
  })
  @post("{id}")
  static createAr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
