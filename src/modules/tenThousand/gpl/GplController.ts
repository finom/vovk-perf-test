import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpl")
export default class GplController {
  @operation({
    summary: "Get Gpl",
  })
  @get()
  static getGpl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpl",
  })
  @post("{id}")
  static createGpl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
