import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ang")
export default class AngController {
  @operation({
    summary: "Get Ang",
  })
  @get()
  static getAng = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ang",
  })
  @post("{id}")
  static createAng = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
