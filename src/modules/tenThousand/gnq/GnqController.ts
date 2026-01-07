import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnq")
export default class GnqController {
  @operation({
    summary: "Get Gnq",
  })
  @get()
  static getGnq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnq",
  })
  @post("{id}")
  static createGnq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
