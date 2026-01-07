import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqf")
export default class GqfController {
  @operation({
    summary: "Get Gqf",
  })
  @get()
  static getGqf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqf",
  })
  @post("{id}")
  static createGqf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
