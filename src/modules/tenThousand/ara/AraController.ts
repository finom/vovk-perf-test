import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ara")
export default class AraController {
  @operation({
    summary: "Get Ara",
  })
  @get()
  static getAra = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ara",
  })
  @post("{id}")
  static createAra = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
