import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fos")
export default class FosController {
  @operation({
    summary: "Get Fos",
  })
  @get()
  static getFos = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fos",
  })
  @post("{id}")
  static createFos = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
