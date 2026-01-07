import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncr")
export default class NcrController {
  @operation({
    summary: "Get Ncr",
  })
  @get()
  static getNcr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncr",
  })
  @post("{id}")
  static createNcr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
