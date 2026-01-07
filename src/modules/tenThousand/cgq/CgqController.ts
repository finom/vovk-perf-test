import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgq")
export default class CgqController {
  @operation({
    summary: "Get Cgq",
  })
  @get()
  static getCgq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgq",
  })
  @post("{id}")
  static createCgq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
