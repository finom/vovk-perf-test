import { procedure, prefix, get, post, operation } from "vovk";

@prefix("haj")
export default class HajController {
  @operation({
    summary: "Get Haj",
  })
  @get()
  static getHaj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Haj",
  })
  @post("{id}")
  static createHaj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
