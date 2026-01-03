import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byms")
export default class BymController {
  @operation({
    summary: "Get Byms",
  })
  @get()
  static getByms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bym",
  })
  @post("{id}")
  static createBym = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
