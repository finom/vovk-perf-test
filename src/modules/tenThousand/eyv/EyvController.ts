import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyv")
export default class EyvController {
  @operation({
    summary: "Get Eyv",
  })
  @get()
  static getEyv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyv",
  })
  @post("{id}")
  static createEyv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
