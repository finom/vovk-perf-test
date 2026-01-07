import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frf")
export default class FrfController {
  @operation({
    summary: "Get Frf",
  })
  @get()
  static getFrf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frf",
  })
  @post("{id}")
  static createFrf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
