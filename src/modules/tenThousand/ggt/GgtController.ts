import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggt")
export default class GgtController {
  @operation({
    summary: "Get Ggt",
  })
  @get()
  static getGgt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggt",
  })
  @post("{id}")
  static createGgt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
