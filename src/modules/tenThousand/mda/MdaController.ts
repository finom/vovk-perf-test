import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mda")
export default class MdaController {
  @operation({
    summary: "Get Mda",
  })
  @get()
  static getMda = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mda",
  })
  @post("{id}")
  static createMda = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
