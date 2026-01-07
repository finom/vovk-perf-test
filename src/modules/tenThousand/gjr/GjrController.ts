import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjr")
export default class GjrController {
  @operation({
    summary: "Get Gjr",
  })
  @get()
  static getGjr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjr",
  })
  @post("{id}")
  static createGjr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
