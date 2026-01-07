import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbx")
export default class NbxController {
  @operation({
    summary: "Get Nbx",
  })
  @get()
  static getNbx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbx",
  })
  @post("{id}")
  static createNbx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
