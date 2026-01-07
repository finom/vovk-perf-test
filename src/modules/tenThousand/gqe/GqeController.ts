import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqe")
export default class GqeController {
  @operation({
    summary: "Get Gqe",
  })
  @get()
  static getGqe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqe",
  })
  @post("{id}")
  static createGqe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
