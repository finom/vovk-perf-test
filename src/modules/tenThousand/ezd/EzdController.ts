import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezd")
export default class EzdController {
  @operation({
    summary: "Get Ezd",
  })
  @get()
  static getEzd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezd",
  })
  @post("{id}")
  static createEzd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
