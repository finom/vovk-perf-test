import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmk")
export default class DmkController {
  @operation({
    summary: "Get Dmk",
  })
  @get()
  static getDmk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmk",
  })
  @post("{id}")
  static createDmk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
