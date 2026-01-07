import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezv")
export default class EzvController {
  @operation({
    summary: "Get Ezv",
  })
  @get()
  static getEzv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezv",
  })
  @post("{id}")
  static createEzv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
