import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azt")
export default class AztController {
  @operation({
    summary: "Get Azt",
  })
  @get()
  static getAzt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azt",
  })
  @post("{id}")
  static createAzt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
