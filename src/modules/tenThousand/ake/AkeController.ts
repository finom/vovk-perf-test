import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ake")
export default class AkeController {
  @operation({
    summary: "Get Ake",
  })
  @get()
  static getAke = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ake",
  })
  @post("{id}")
  static createAke = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
