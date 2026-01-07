import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eot")
export default class EotController {
  @operation({
    summary: "Get Eot",
  })
  @get()
  static getEot = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eot",
  })
  @post("{id}")
  static createEot = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
