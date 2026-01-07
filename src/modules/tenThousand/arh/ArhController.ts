import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arh")
export default class ArhController {
  @operation({
    summary: "Get Arh",
  })
  @get()
  static getArh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Arh",
  })
  @post("{id}")
  static createArh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
