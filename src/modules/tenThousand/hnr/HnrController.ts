import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnr")
export default class HnrController {
  @operation({
    summary: "Get Hnr",
  })
  @get()
  static getHnr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnr",
  })
  @post("{id}")
  static createHnr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
