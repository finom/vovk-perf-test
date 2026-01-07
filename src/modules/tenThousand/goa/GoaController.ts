import { procedure, prefix, get, post, operation } from "vovk";

@prefix("goa")
export default class GoaController {
  @operation({
    summary: "Get Goa",
  })
  @get()
  static getGoa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Goa",
  })
  @post("{id}")
  static createGoa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
