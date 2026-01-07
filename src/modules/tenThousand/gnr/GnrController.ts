import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnr")
export default class GnrController {
  @operation({
    summary: "Get Gnr",
  })
  @get()
  static getGnr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnr",
  })
  @post("{id}")
  static createGnr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
