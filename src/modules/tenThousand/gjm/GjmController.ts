import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjm")
export default class GjmController {
  @operation({
    summary: "Get Gjm",
  })
  @get()
  static getGjm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjm",
  })
  @post("{id}")
  static createGjm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
