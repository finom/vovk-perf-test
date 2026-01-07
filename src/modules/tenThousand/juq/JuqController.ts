import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juq")
export default class JuqController {
  @operation({
    summary: "Get Juq",
  })
  @get()
  static getJuq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Juq",
  })
  @post("{id}")
  static createJuq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
