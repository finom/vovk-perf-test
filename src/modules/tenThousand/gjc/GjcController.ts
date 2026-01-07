import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjc")
export default class GjcController {
  @operation({
    summary: "Get Gjc",
  })
  @get()
  static getGjc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjc",
  })
  @post("{id}")
  static createGjc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
