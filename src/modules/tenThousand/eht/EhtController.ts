import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eht")
export default class EhtController {
  @operation({
    summary: "Get Eht",
  })
  @get()
  static getEht = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eht",
  })
  @post("{id}")
  static createEht = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
