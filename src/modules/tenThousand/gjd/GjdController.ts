import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjd")
export default class GjdController {
  @operation({
    summary: "Get Gjd",
  })
  @get()
  static getGjd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjd",
  })
  @post("{id}")
  static createGjd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
