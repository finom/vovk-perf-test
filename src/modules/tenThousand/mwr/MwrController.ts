import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwr")
export default class MwrController {
  @operation({
    summary: "Get Mwr",
  })
  @get()
  static getMwr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwr",
  })
  @post("{id}")
  static createMwr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
