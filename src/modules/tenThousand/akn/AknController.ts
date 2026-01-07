import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akn")
export default class AknController {
  @operation({
    summary: "Get Akn",
  })
  @get()
  static getAkn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akn",
  })
  @post("{id}")
  static createAkn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
