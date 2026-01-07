import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ava")
export default class AvaController {
  @operation({
    summary: "Get Ava",
  })
  @get()
  static getAva = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ava",
  })
  @post("{id}")
  static createAva = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
