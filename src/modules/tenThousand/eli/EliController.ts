import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eli")
export default class EliController {
  @operation({
    summary: "Get Eli",
  })
  @get()
  static getEli = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eli",
  })
  @post("{id}")
  static createEli = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
