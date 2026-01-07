import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwf")
export default class GwfController {
  @operation({
    summary: "Get Gwf",
  })
  @get()
  static getGwf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwf",
  })
  @post("{id}")
  static createGwf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
