import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcq")
export default class HcqController {
  @operation({
    summary: "Get Hcq",
  })
  @get()
  static getHcq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcq",
  })
  @post("{id}")
  static createHcq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
