import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fss")
export default class FssController {
  @operation({
    summary: "Get Fss",
  })
  @get()
  static getFss = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fss",
  })
  @post("{id}")
  static createFss = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
