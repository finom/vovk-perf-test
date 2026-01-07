import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqz")
export default class GqzController {
  @operation({
    summary: "Get Gqz",
  })
  @get()
  static getGqz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqz",
  })
  @post("{id}")
  static createGqz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
