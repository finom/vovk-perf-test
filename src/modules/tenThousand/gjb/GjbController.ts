import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjb")
export default class GjbController {
  @operation({
    summary: "Get Gjb",
  })
  @get()
  static getGjb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjb",
  })
  @post("{id}")
  static createGjb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
