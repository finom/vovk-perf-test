import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ei")
export default class EiController {
  @operation({
    summary: "Get Ei",
  })
  @get()
  static getEi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ei",
  })
  @post("{id}")
  static createEi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
