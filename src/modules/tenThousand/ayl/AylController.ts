import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayl")
export default class AylController {
  @operation({
    summary: "Get Ayl",
  })
  @get()
  static getAyl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayl",
  })
  @post("{id}")
  static createAyl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
