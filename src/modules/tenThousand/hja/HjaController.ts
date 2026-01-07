import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hja")
export default class HjaController {
  @operation({
    summary: "Get Hja",
  })
  @get()
  static getHja = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hja",
  })
  @post("{id}")
  static createHja = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
