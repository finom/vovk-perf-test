import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwb")
export default class KwbController {
  @operation({
    summary: "Get Kwb",
  })
  @get()
  static getKwb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwb",
  })
  @post("{id}")
  static createKwb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
