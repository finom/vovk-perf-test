import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gob")
export default class GobController {
  @operation({
    summary: "Get Gob",
  })
  @get()
  static getGob = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gob",
  })
  @post("{id}")
  static createGob = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
