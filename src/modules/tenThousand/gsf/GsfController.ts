import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsf")
export default class GsfController {
  @operation({
    summary: "Get Gsf",
  })
  @get()
  static getGsf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsf",
  })
  @post("{id}")
  static createGsf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
