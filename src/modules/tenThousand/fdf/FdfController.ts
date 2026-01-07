import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdf")
export default class FdfController {
  @operation({
    summary: "Get Fdf",
  })
  @get()
  static getFdf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdf",
  })
  @post("{id}")
  static createFdf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
