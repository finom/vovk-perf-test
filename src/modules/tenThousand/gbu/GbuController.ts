import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbu")
export default class GbuController {
  @operation({
    summary: "Get Gbu",
  })
  @get()
  static getGbu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbu",
  })
  @post("{id}")
  static createGbu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
