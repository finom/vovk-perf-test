import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abr")
export default class AbrController {
  @operation({
    summary: "Get Abr",
  })
  @get()
  static getAbr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abr",
  })
  @post("{id}")
  static createAbr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
