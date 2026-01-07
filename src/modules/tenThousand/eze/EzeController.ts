import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eze")
export default class EzeController {
  @operation({
    summary: "Get Eze",
  })
  @get()
  static getEze = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eze",
  })
  @post("{id}")
  static createEze = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
