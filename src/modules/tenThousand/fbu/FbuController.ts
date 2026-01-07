import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbu")
export default class FbuController {
  @operation({
    summary: "Get Fbu",
  })
  @get()
  static getFbu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbu",
  })
  @post("{id}")
  static createFbu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
