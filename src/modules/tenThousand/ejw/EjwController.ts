import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ejw")
export default class EjwController {
  @operation({
    summary: "Get Ejw",
  })
  @get()
  static getEjw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejw",
  })
  @post("{id}")
  static createEjw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
