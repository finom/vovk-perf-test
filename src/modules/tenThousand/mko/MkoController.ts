import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkos")
export default class MkoController {
  @operation({
    summary: "Get Mkos",
  })
  @get()
  static getMkos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mko",
  })
  @post("{id}")
  static createMko = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
