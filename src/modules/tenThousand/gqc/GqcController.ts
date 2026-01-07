import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqc")
export default class GqcController {
  @operation({
    summary: "Get Gqc",
  })
  @get()
  static getGqc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqc",
  })
  @post("{id}")
  static createGqc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
