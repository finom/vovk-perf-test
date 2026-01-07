import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hiv")
export default class HivController {
  @operation({
    summary: "Get Hiv",
  })
  @get()
  static getHiv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hiv",
  })
  @post("{id}")
  static createHiv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
