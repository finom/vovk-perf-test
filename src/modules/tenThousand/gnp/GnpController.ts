import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnp")
export default class GnpController {
  @operation({
    summary: "Get Gnp",
  })
  @get()
  static getGnp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnp",
  })
  @post("{id}")
  static createGnp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
