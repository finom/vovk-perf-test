import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euh")
export default class EuhController {
  @operation({
    summary: "Get Euh",
  })
  @get()
  static getEuh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Euh",
  })
  @post("{id}")
  static createEuh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
