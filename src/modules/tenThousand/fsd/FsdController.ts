import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsd")
export default class FsdController {
  @operation({
    summary: "Get Fsd",
  })
  @get()
  static getFsd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsd",
  })
  @post("{id}")
  static createFsd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
