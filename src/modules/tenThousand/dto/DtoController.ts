import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dto")
export default class DtoController {
  @operation({
    summary: "Get Dto",
  })
  @get()
  static getDto = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dto",
  })
  @post("{id}")
  static createDto = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
