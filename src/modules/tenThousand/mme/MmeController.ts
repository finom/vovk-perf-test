import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mme")
export default class MmeController {
  @operation({
    summary: "Get Mme",
  })
  @get()
  static getMme = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mme",
  })
  @post("{id}")
  static createMme = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
