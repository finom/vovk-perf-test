import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("efc")
export default class EfcController {
  @operation({
    summary: "Get Efc",
  })
  @get()
  static getEfc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efc",
  })
  @post("{id}")
  static createEfc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
