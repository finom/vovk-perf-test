import { procedure, prefix, get, post, operation } from "vovk";

@prefix("caw")
export default class CawController {
  @operation({
    summary: "Get Caw",
  })
  @get()
  static getCaw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Caw",
  })
  @post("{id}")
  static createCaw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
