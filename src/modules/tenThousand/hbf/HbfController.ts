import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbf")
export default class HbfController {
  @operation({
    summary: "Get Hbf",
  })
  @get()
  static getHbf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbf",
  })
  @post("{id}")
  static createHbf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
