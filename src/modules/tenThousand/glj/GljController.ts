import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glj")
export default class GljController {
  @operation({
    summary: "Get Glj",
  })
  @get()
  static getGlj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Glj",
  })
  @post("{id}")
  static createGlj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
