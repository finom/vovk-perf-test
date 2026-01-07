import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgt")
export default class FgtController {
  @operation({
    summary: "Get Fgt",
  })
  @get()
  static getFgt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgt",
  })
  @post("{id}")
  static createFgt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
