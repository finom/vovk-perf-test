import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hiq")
export default class HiqController {
  @operation({
    summary: "Get Hiq",
  })
  @get()
  static getHiq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hiq",
  })
  @post("{id}")
  static createHiq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
