import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmi")
export default class GmiController {
  @operation({
    summary: "Get Gmi",
  })
  @get()
  static getGmi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmi",
  })
  @post("{id}")
  static createGmi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
