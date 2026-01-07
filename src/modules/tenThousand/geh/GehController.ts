import { procedure, prefix, get, post, operation } from "vovk";

@prefix("geh")
export default class GehController {
  @operation({
    summary: "Get Geh",
  })
  @get()
  static getGeh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Geh",
  })
  @post("{id}")
  static createGeh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
