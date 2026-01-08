import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ejx")
export default class EjxController {
  @operation({
    summary: "Get Ejx",
  })
  @get()
  static getEjx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejx",
  })
  @post("{id}")
  static createEjx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
