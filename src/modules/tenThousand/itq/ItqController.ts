import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itq")
export default class ItqController {
  @operation({
    summary: "Get Itq",
  })
  @get()
  static getItq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Itq",
  })
  @post("{id}")
  static createItq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
