import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncw")
export default class NcwController {
  @operation({
    summary: "Get Ncw",
  })
  @get()
  static getNcw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncw",
  })
  @post("{id}")
  static createNcw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
