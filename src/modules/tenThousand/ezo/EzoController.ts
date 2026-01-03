import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezos")
export default class EzoController {
  @operation({
    summary: "Get Ezos",
  })
  @get()
  static getEzos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezo",
  })
  @post("{id}")
  static createEzo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
