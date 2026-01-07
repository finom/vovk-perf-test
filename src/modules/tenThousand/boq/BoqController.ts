import { procedure, prefix, get, post, operation } from "vovk";

@prefix("boq")
export default class BoqController {
  @operation({
    summary: "Get Boq",
  })
  @get()
  static getBoq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Boq",
  })
  @post("{id}")
  static createBoq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
