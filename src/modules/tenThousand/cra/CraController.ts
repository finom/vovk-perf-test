import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cra")
export default class CraController {
  @operation({
    summary: "Get Cra",
  })
  @get()
  static getCra = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cra",
  })
  @post("{id}")
  static createCra = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
