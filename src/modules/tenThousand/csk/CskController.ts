import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csk")
export default class CskController {
  @operation({
    summary: "Get Csk",
  })
  @get()
  static getCsk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csk",
  })
  @post("{id}")
  static createCsk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
