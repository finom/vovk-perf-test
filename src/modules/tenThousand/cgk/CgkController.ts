import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgk")
export default class CgkController {
  @operation({
    summary: "Get Cgk",
  })
  @get()
  static getCgk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgk",
  })
  @post("{id}")
  static createCgk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
