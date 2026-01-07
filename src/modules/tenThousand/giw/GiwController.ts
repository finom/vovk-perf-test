import { procedure, prefix, get, post, operation } from "vovk";

@prefix("giw")
export default class GiwController {
  @operation({
    summary: "Get Giw",
  })
  @get()
  static getGiw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Giw",
  })
  @post("{id}")
  static createGiw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
