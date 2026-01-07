import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inh")
export default class InhController {
  @operation({
    summary: "Get Inh",
  })
  @get()
  static getInh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Inh",
  })
  @post("{id}")
  static createInh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
