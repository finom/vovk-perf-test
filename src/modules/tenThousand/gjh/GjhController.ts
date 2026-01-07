import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjh")
export default class GjhController {
  @operation({
    summary: "Get Gjh",
  })
  @get()
  static getGjh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjh",
  })
  @post("{id}")
  static createGjh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
