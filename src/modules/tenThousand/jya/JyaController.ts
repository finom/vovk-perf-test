import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyas")
export default class JyaController {
  @operation({
    summary: "Get Jyas",
  })
  @get()
  static getJyas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jya",
  })
  @post("{id}")
  static createJya = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
