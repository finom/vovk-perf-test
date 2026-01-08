import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ejp")
export default class EjpController {
  @operation({
    summary: "Get Ejp",
  })
  @get()
  static getEjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejp",
  })
  @post("{id}")
  static createEjp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
