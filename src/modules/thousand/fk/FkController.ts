import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fk")
export default class FkController {
  @operation({
    summary: "Get Fk",
  })
  @get()
  static getFk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fk",
  })
  @post("{id}")
  static createFk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
