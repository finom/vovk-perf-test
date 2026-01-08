import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ejm")
export default class EjmController {
  @operation({
    summary: "Get Ejm",
  })
  @get()
  static getEjm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejm",
  })
  @post("{id}")
  static createEjm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
