import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncj")
export default class NcjController {
  @operation({
    summary: "Get Ncj",
  })
  @get()
  static getNcj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncj",
  })
  @post("{id}")
  static createNcj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
