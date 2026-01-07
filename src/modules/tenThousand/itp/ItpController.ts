import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itp")
export default class ItpController {
  @operation({
    summary: "Get Itp",
  })
  @get()
  static getItp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Itp",
  })
  @post("{id}")
  static createItp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
