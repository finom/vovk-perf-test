import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcn")
export default class HcnController {
  @operation({
    summary: "Get Hcn",
  })
  @get()
  static getHcn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcn",
  })
  @post("{id}")
  static createHcn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
