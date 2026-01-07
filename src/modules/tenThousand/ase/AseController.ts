import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ase")
export default class AseController {
  @operation({
    summary: "Get Ase",
  })
  @get()
  static getAse = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ase",
  })
  @post("{id}")
  static createAse = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
