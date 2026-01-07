import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjp")
export default class GjpController {
  @operation({
    summary: "Get Gjp",
  })
  @get()
  static getGjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjp",
  })
  @post("{id}")
  static createGjp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
