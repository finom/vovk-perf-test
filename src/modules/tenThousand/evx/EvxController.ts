import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evx")
export default class EvxController {
  @operation({
    summary: "Get Evx",
  })
  @get()
  static getEvx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evx",
  })
  @post("{id}")
  static createEvx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
