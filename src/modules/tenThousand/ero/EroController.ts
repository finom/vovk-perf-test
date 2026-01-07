import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ero")
export default class EroController {
  @operation({
    summary: "Get Ero",
  })
  @get()
  static getEro = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ero",
  })
  @post("{id}")
  static createEro = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
