import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewc")
export default class EwcController {
  @operation({
    summary: "Get Ewc",
  })
  @get()
  static getEwc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewc",
  })
  @post("{id}")
  static createEwc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
