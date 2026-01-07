import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggy")
export default class GgyController {
  @operation({
    summary: "Get Ggy",
  })
  @get()
  static getGgy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggy",
  })
  @post("{id}")
  static createGgy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
