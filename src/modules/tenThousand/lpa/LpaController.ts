import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpa")
export default class LpaController {
  @operation({
    summary: "Get Lpa",
  })
  @get()
  static getLpa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpa",
  })
  @post("{id}")
  static createLpa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
