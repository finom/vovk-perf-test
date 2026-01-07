import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eks")
export default class EksController {
  @operation({
    summary: "Get Eks",
  })
  @get()
  static getEks = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eks",
  })
  @post("{id}")
  static createEks = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
