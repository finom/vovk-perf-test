import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqk")
export default class GqkController {
  @operation({
    summary: "Get Gqk",
  })
  @get()
  static getGqk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqk",
  })
  @post("{id}")
  static createGqk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
