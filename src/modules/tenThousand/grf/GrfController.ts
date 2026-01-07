import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grf")
export default class GrfController {
  @operation({
    summary: "Get Grf",
  })
  @get()
  static getGrf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grf",
  })
  @post("{id}")
  static createGrf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
