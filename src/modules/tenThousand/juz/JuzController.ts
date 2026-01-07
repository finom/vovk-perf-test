import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juz")
export default class JuzController {
  @operation({
    summary: "Get Juz",
  })
  @get()
  static getJuz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Juz",
  })
  @post("{id}")
  static createJuz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
