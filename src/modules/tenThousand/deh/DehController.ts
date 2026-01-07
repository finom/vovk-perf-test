import { procedure, prefix, get, post, operation } from "vovk";

@prefix("deh")
export default class DehController {
  @operation({
    summary: "Get Deh",
  })
  @get()
  static getDeh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Deh",
  })
  @post("{id}")
  static createDeh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
