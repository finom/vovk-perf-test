import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ala")
export default class AlaController {
  @operation({
    summary: "Get Ala",
  })
  @get()
  static getAla = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ala",
  })
  @post("{id}")
  static createAla = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
