import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pn")
export default class PnController {
  @operation({
    summary: "Get Pn",
  })
  @get()
  static getPn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pn",
  })
  @post("{id}")
  static createPn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
