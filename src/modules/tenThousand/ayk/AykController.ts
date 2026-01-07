import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayk")
export default class AykController {
  @operation({
    summary: "Get Ayk",
  })
  @get()
  static getAyk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayk",
  })
  @post("{id}")
  static createAyk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
