import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gah")
export default class GahController {
  @operation({
    summary: "Get Gah",
  })
  @get()
  static getGah = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gah",
  })
  @post("{id}")
  static createGah = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
