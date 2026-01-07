import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjt")
export default class GjtController {
  @operation({
    summary: "Get Gjt",
  })
  @get()
  static getGjt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjt",
  })
  @post("{id}")
  static createGjt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
