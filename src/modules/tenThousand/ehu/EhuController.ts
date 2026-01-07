import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehu")
export default class EhuController {
  @operation({
    summary: "Get Ehu",
  })
  @get()
  static getEhu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehu",
  })
  @post("{id}")
  static createEhu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
