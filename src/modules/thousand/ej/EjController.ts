import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ej")
export default class EjController {
  @operation({
    summary: "Get Ej",
  })
  @get()
  static getEj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ej",
  })
  @post("{id}")
  static createEj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
