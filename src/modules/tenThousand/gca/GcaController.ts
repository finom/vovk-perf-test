import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gca")
export default class GcaController {
  @operation({
    summary: "Get Gca",
  })
  @get()
  static getGca = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gca",
  })
  @post("{id}")
  static createGca = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
