import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akos")
export default class AkoController {
  @operation({
    summary: "Get Akos",
  })
  @get()
  static getAkos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ako",
  })
  @post("{id}")
  static createAko = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
