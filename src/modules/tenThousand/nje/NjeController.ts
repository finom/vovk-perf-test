import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nje")
export default class NjeController {
  @operation({
    summary: "Get Nje",
  })
  @get()
  static getNje = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nje",
  })
  @post("{id}")
  static createNje = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
