import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehl")
export default class EhlController {
  @operation({
    summary: "Get Ehl",
  })
  @get()
  static getEhl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehl",
  })
  @post("{id}")
  static createEhl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
