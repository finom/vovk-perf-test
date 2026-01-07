import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aan")
export default class AanController {
  @operation({
    summary: "Get Aan",
  })
  @get()
  static getAan = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aan",
  })
  @post("{id}")
  static createAan = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
