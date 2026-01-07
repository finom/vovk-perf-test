import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gak")
export default class GakController {
  @operation({
    summary: "Get Gak",
  })
  @get()
  static getGak = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gak",
  })
  @post("{id}")
  static createGak = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
