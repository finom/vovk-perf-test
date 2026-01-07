import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hif")
export default class HifController {
  @operation({
    summary: "Get Hif",
  })
  @get()
  static getHif = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hif",
  })
  @post("{id}")
  static createHif = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
