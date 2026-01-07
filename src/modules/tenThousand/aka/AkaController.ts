import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aka")
export default class AkaController {
  @operation({
    summary: "Get Aka",
  })
  @get()
  static getAka = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aka",
  })
  @post("{id}")
  static createAka = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
