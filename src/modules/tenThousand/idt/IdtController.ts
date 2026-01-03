import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idts")
export default class IdtController {
  @operation({
    summary: "Get Idts",
  })
  @get()
  static getIdts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Idt",
  })
  @post("{id}")
  static createIdt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
