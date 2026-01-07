import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjn")
export default class GjnController {
  @operation({
    summary: "Get Gjn",
  })
  @get()
  static getGjn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjn",
  })
  @post("{id}")
  static createGjn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
