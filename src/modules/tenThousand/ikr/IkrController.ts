import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikr")
export default class IkrController {
  @operation({
    summary: "Get Ikr",
  })
  @get()
  static getIkr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikr",
  })
  @post("{id}")
  static createIkr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
