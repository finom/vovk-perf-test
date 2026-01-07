import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avy")
export default class AvyController {
  @operation({
    summary: "Get Avy",
  })
  @get()
  static getAvy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avy",
  })
  @post("{id}")
  static createAvy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
