import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqx")
export default class GqxController {
  @operation({
    summary: "Get Gqx",
  })
  @get()
  static getGqx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqx",
  })
  @post("{id}")
  static createGqx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
