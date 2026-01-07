import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exh")
export default class ExhController {
  @operation({
    summary: "Get Exh",
  })
  @get()
  static getExh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exh",
  })
  @post("{id}")
  static createExh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
