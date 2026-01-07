import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdc")
export default class MdcController {
  @operation({
    summary: "Get Mdc",
  })
  @get()
  static getMdc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdc",
  })
  @post("{id}")
  static createMdc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
