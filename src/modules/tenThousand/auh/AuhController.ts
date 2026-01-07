import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auh")
export default class AuhController {
  @operation({
    summary: "Get Auh",
  })
  @get()
  static getAuh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Auh",
  })
  @post("{id}")
  static createAuh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
