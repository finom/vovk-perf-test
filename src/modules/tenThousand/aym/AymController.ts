import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aym")
export default class AymController {
  @operation({
    summary: "Get Aym",
  })
  @get()
  static getAym = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aym",
  })
  @post("{id}")
  static createAym = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
