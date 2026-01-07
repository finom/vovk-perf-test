import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayv")
export default class AyvController {
  @operation({
    summary: "Get Ayv",
  })
  @get()
  static getAyv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayv",
  })
  @post("{id}")
  static createAyv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
