import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnr")
export default class MnrController {
  @operation({
    summary: "Get Mnr",
  })
  @get()
  static getMnr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnr",
  })
  @post("{id}")
  static createMnr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
