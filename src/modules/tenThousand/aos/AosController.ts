import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aos")
export default class AosController {
  @operation({
    summary: "Get Aos",
  })
  @get()
  static getAos = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aos",
  })
  @post("{id}")
  static createAos = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
