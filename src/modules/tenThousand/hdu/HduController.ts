import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdu")
export default class HduController {
  @operation({
    summary: "Get Hdu",
  })
  @get()
  static getHdu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdu",
  })
  @post("{id}")
  static createHdu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
