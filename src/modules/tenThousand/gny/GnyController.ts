import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gny")
export default class GnyController {
  @operation({
    summary: "Get Gny",
  })
  @get()
  static getGny = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gny",
  })
  @post("{id}")
  static createGny = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
