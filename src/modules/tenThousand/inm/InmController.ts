import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inm")
export default class InmController {
  @operation({
    summary: "Get Inm",
  })
  @get()
  static getInm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Inm",
  })
  @post("{id}")
  static createInm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
