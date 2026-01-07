import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqy")
export default class AqyController {
  @operation({
    summary: "Get Aqy",
  })
  @get()
  static getAqy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqy",
  })
  @post("{id}")
  static createAqy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
