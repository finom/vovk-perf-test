import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hox")
export default class HoxController {
  @operation({
    summary: "Get Hox",
  })
  @get()
  static getHox = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hox",
  })
  @post("{id}")
  static createHox = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
