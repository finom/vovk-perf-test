import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atm")
export default class AtmController {
  @operation({
    summary: "Get Atm",
  })
  @get()
  static getAtm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Atm",
  })
  @post("{id}")
  static createAtm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
