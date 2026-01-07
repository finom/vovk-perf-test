import { procedure, prefix, get, post, operation } from "vovk";

@prefix("geb")
export default class GebController {
  @operation({
    summary: "Get Geb",
  })
  @get()
  static getGeb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Geb",
  })
  @post("{id}")
  static createGeb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
