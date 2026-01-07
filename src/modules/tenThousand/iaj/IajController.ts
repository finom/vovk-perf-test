import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iaj")
export default class IajController {
  @operation({
    summary: "Get Iaj",
  })
  @get()
  static getIaj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iaj",
  })
  @post("{id}")
  static createIaj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
