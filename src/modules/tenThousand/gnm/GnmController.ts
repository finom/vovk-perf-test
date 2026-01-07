import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnm")
export default class GnmController {
  @operation({
    summary: "Get Gnm",
  })
  @get()
  static getGnm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnm",
  })
  @post("{id}")
  static createGnm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
