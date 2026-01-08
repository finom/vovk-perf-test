import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("efr")
export default class EfrController {
  @operation({
    summary: "Get Efr",
  })
  @get()
  static getEfr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efr",
  })
  @post("{id}")
  static createEfr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
