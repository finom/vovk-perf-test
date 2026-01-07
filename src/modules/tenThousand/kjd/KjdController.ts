import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjd")
export default class KjdController {
  @operation({
    summary: "Get Kjd",
  })
  @get()
  static getKjd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjd",
  })
  @post("{id}")
  static createKjd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
