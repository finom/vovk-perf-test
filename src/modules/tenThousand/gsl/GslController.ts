import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsl")
export default class GslController {
  @operation({
    summary: "Get Gsl",
  })
  @get()
  static getGsl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsl",
  })
  @post("{id}")
  static createGsl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
