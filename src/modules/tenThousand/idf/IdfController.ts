import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idfs")
export default class IdfController {
  @operation({
    summary: "Get Idfs",
  })
  @get()
  static getIdfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Idf",
  })
  @post("{id}")
  static createIdf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
