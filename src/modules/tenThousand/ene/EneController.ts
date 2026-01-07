import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ene")
export default class EneController {
  @operation({
    summary: "Get Ene",
  })
  @get()
  static getEne = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ene",
  })
  @post("{id}")
  static createEne = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
