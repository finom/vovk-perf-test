import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iik")
export default class IikController {
  @operation({
    summary: "Get Iik",
  })
  @get()
  static getIik = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iik",
  })
  @post("{id}")
  static createIik = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
