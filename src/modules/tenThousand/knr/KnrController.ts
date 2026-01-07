import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knr")
export default class KnrController {
  @operation({
    summary: "Get Knr",
  })
  @get()
  static getKnr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knr",
  })
  @post("{id}")
  static createKnr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
