import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayt")
export default class AytController {
  @operation({
    summary: "Get Ayt",
  })
  @get()
  static getAyt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayt",
  })
  @post("{id}")
  static createAyt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
