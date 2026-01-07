import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agh")
export default class AghController {
  @operation({
    summary: "Get Agh",
  })
  @get()
  static getAgh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agh",
  })
  @post("{id}")
  static createAgh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
