import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iry")
export default class IryController {
  @operation({
    summary: "Get Iry",
  })
  @get()
  static getIry = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iry",
  })
  @post("{id}")
  static createIry = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
