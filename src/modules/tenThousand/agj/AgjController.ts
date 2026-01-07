import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agj")
export default class AgjController {
  @operation({
    summary: "Get Agj",
  })
  @get()
  static getAgj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agj",
  })
  @post("{id}")
  static createAgj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
