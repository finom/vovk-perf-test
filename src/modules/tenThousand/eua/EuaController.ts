import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eua")
export default class EuaController {
  @operation({
    summary: "Get Eua",
  })
  @get()
  static getEua = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eua",
  })
  @post("{id}")
  static createEua = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
