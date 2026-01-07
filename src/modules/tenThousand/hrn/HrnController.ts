import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrn")
export default class HrnController {
  @operation({
    summary: "Get Hrn",
  })
  @get()
  static getHrn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrn",
  })
  @post("{id}")
  static createHrn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
