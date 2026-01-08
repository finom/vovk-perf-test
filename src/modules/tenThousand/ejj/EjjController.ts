import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ejj")
export default class EjjController {
  @operation({
    summary: "Get Ejj",
  })
  @get()
  static getEjj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejj",
  })
  @post("{id}")
  static createEjj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
