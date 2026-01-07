import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftj")
export default class FtjController {
  @operation({
    summary: "Get Ftj",
  })
  @get()
  static getFtj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftj",
  })
  @post("{id}")
  static createFtj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
