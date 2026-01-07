import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggi")
export default class GgiController {
  @operation({
    summary: "Get Ggi",
  })
  @get()
  static getGgi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggi",
  })
  @post("{id}")
  static createGgi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
