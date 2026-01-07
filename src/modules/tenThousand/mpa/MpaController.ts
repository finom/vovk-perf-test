import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpa")
export default class MpaController {
  @operation({
    summary: "Get Mpa",
  })
  @get()
  static getMpa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpa",
  })
  @post("{id}")
  static createMpa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
