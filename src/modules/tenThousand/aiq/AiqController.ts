import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aiq")
export default class AiqController {
  @operation({
    summary: "Get Aiq",
  })
  @get()
  static getAiq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aiq",
  })
  @post("{id}")
  static createAiq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
