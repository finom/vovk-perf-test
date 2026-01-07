import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aeh")
export default class AehController {
  @operation({
    summary: "Get Aeh",
  })
  @get()
  static getAeh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aeh",
  })
  @post("{id}")
  static createAeh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
