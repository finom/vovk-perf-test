import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lab")
export default class LabController {
  @operation({
    summary: "Get Lab",
  })
  @get()
  static getLab = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lab",
  })
  @post("{id}")
  static createLab = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
