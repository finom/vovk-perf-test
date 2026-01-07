import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akj")
export default class AkjController {
  @operation({
    summary: "Get Akj",
  })
  @get()
  static getAkj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akj",
  })
  @post("{id}")
  static createAkj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
