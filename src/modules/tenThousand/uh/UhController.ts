import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uh")
export default class UhController {
  @operation({
    summary: "Get Uh",
  })
  @get()
  static getUh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Uh",
  })
  @post("{id}")
  static createUh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
