import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdo")
export default class FdoController {
  @operation({
    summary: "Get Fdo",
  })
  @get()
  static getFdo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdo",
  })
  @post("{id}")
  static createFdo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
