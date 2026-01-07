import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elj")
export default class EljController {
  @operation({
    summary: "Get Elj",
  })
  @get()
  static getElj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elj",
  })
  @post("{id}")
  static createElj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
