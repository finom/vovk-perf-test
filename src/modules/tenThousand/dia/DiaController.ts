import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dia")
export default class DiaController {
  @operation({
    summary: "Get Dia",
  })
  @get()
  static getDia = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dia",
  })
  @post("{id}")
  static createDia = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
