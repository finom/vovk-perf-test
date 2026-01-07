import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzo")
export default class LzoController {
  @operation({
    summary: "Get Lzo",
  })
  @get()
  static getLzo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzo",
  })
  @post("{id}")
  static createLzo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
