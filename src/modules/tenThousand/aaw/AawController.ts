import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aaw")
export default class AawController {
  @operation({
    summary: "Get Aaw",
  })
  @get()
  static getAaw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aaw",
  })
  @post("{id}")
  static createAaw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
