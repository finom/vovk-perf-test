import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffk")
export default class FfkController {
  @operation({
    summary: "Get Ffk",
  })
  @get()
  static getFfk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffk",
  })
  @post("{id}")
  static createFfk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
