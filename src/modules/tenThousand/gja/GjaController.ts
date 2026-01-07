import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gja")
export default class GjaController {
  @operation({
    summary: "Get Gja",
  })
  @get()
  static getGja = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gja",
  })
  @post("{id}")
  static createGja = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
