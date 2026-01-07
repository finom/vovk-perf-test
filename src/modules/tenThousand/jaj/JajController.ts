import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jaj")
export default class JajController {
  @operation({
    summary: "Get Jaj",
  })
  @get()
  static getJaj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jaj",
  })
  @post("{id}")
  static createJaj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
