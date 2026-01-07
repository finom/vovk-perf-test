import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akl")
export default class AklController {
  @operation({
    summary: "Get Akl",
  })
  @get()
  static getAkl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akl",
  })
  @post("{id}")
  static createAkl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
