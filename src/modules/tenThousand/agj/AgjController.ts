import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agj")
export default class AgjController {
  @operation({
    summary: "Get Agj",
  })
  @get()
  static getAgj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agj",
  })
  @post("{id}")
  static createAgj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
