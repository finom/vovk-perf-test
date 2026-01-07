import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hka")
export default class HkaController {
  @operation({
    summary: "Get Hka",
  })
  @get()
  static getHka = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hka",
  })
  @post("{id}")
  static createHka = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
