import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivo")
export default class IvoController {
  @operation({
    summary: "Get Ivo",
  })
  @get()
  static getIvo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivo",
  })
  @post("{id}")
  static createIvo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
