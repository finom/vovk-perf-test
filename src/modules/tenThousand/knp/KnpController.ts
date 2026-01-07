import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knp")
export default class KnpController {
  @operation({
    summary: "Get Knp",
  })
  @get()
  static getKnp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Knp",
  })
  @post("{id}")
  static createKnp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
