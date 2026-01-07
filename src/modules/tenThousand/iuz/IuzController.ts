import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuz")
export default class IuzController {
  @operation({
    summary: "Get Iuz",
  })
  @get()
  static getIuz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iuz",
  })
  @post("{id}")
  static createIuz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
