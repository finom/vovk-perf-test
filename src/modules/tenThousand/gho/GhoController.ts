import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gho")
export default class GhoController {
  @operation({
    summary: "Get Gho",
  })
  @get()
  static getGho = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gho",
  })
  @post("{id}")
  static createGho = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
