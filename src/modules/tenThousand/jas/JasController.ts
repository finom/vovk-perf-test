import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jas")
export default class JasController {
  @operation({
    summary: "Get Jas",
  })
  @get()
  static getJas = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jas",
  })
  @post("{id}")
  static createJas = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
