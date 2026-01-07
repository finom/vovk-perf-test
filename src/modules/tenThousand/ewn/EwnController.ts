import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewn")
export default class EwnController {
  @operation({
    summary: "Get Ewn",
  })
  @get()
  static getEwn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewn",
  })
  @post("{id}")
  static createEwn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
