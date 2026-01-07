import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fac")
export default class FacController {
  @operation({
    summary: "Get Fac",
  })
  @get()
  static getFac = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fac",
  })
  @post("{id}")
  static createFac = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
