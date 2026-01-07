import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyk")
export default class LykController {
  @operation({
    summary: "Get Lyk",
  })
  @get()
  static getLyk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyk",
  })
  @post("{id}")
  static createLyk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
