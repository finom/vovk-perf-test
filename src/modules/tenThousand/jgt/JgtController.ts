import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgt")
export default class JgtController {
  @operation({
    summary: "Get Jgt",
  })
  @get()
  static getJgt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgt",
  })
  @post("{id}")
  static createJgt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
