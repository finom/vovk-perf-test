import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ua")
export default class UaController {
  @operation({
    summary: "Get Ua",
  })
  @get()
  static getUa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ua",
  })
  @post("{id}")
  static createUa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
