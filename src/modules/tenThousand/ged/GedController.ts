import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ged")
export default class GedController {
  @operation({
    summary: "Get Ged",
  })
  @get()
  static getGed = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ged",
  })
  @post("{id}")
  static createGed = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
