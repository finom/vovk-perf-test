import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnf")
export default class GnfController {
  @operation({
    summary: "Get Gnf",
  })
  @get()
  static getGnf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnf",
  })
  @post("{id}")
  static createGnf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
