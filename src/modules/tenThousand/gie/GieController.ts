import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gie")
export default class GieController {
  @operation({
    summary: "Get Gie",
  })
  @get()
  static getGie = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gie",
  })
  @post("{id}")
  static createGie = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
