import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flm")
export default class FlmController {
  @operation({
    summary: "Get Flm",
  })
  @get()
  static getFlm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flm",
  })
  @post("{id}")
  static createFlm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
