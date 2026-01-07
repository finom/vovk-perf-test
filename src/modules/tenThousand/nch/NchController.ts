import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nch")
export default class NchController {
  @operation({
    summary: "Get Nch",
  })
  @get()
  static getNch = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nch",
  })
  @post("{id}")
  static createNch = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
