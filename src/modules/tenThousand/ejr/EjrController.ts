import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ejr")
export default class EjrController {
  @operation({
    summary: "Get Ejr",
  })
  @get()
  static getEjr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejr",
  })
  @post("{id}")
  static createEjr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
