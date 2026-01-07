import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwf")
export default class MwfController {
  @operation({
    summary: "Get Mwf",
  })
  @get()
  static getMwf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwf",
  })
  @post("{id}")
  static createMwf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
