import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emn")
export default class EmnController {
  @operation({
    summary: "Get Emn",
  })
  @get()
  static getEmn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emn",
  })
  @post("{id}")
  static createEmn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
