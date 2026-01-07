import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aaj")
export default class AajController {
  @operation({
    summary: "Get Aaj",
  })
  @get()
  static getAaj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aaj",
  })
  @post("{id}")
  static createAaj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
