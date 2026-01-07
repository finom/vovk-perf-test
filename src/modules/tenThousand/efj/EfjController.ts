import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efj")
export default class EfjController {
  @operation({
    summary: "Get Efj",
  })
  @get()
  static getEfj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efj",
  })
  @post("{id}")
  static createEfj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
