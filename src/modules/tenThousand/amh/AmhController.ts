import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amh")
export default class AmhController {
  @operation({
    summary: "Get Amh",
  })
  @get()
  static getAmh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amh",
  })
  @post("{id}")
  static createAmh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
