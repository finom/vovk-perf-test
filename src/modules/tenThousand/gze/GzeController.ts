import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gze")
export default class GzeController {
  @operation({
    summary: "Get Gze",
  })
  @get()
  static getGze = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gze",
  })
  @post("{id}")
  static createGze = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
