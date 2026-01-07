import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aez")
export default class AezController {
  @operation({
    summary: "Get Aez",
  })
  @get()
  static getAez = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aez",
  })
  @post("{id}")
  static createAez = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
