import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kym")
export default class KymController {
  @operation({
    summary: "Get Kym",
  })
  @get()
  static getKym = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kym",
  })
  @post("{id}")
  static createKym = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
