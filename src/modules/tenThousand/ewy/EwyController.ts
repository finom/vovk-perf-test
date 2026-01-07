import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewy")
export default class EwyController {
  @operation({
    summary: "Get Ewy",
  })
  @get()
  static getEwy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewy",
  })
  @post("{id}")
  static createEwy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
