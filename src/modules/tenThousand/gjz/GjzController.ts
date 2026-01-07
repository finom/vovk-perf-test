import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjz")
export default class GjzController {
  @operation({
    summary: "Get Gjz",
  })
  @get()
  static getGjz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjz",
  })
  @post("{id}")
  static createGjz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
