import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euz")
export default class EuzController {
  @operation({
    summary: "Get Euz",
  })
  @get()
  static getEuz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Euz",
  })
  @post("{id}")
  static createEuz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
