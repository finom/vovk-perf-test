import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsb")
export default class NsbController {
  @operation({
    summary: "Get Nsb",
  })
  @get()
  static getNsb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsb",
  })
  @post("{id}")
  static createNsb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
