import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fym")
export default class FymController {
  @operation({
    summary: "Get Fym",
  })
  @get()
  static getFym = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fym",
  })
  @post("{id}")
  static createFym = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
