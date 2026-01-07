import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcr")
export default class HcrController {
  @operation({
    summary: "Get Hcr",
  })
  @get()
  static getHcr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcr",
  })
  @post("{id}")
  static createHcr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
