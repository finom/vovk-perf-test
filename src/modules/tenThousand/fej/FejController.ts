import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fej")
export default class FejController {
  @operation({
    summary: "Get Fej",
  })
  @get()
  static getFej = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fej",
  })
  @post("{id}")
  static createFej = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
