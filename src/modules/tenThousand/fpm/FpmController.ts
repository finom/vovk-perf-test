import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpm")
export default class FpmController {
  @operation({
    summary: "Get Fpm",
  })
  @get()
  static getFpm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpm",
  })
  @post("{id}")
  static createFpm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
