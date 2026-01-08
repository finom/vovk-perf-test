import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gpl")
export default class GplController {
  @operation({
    summary: "Get Gpl",
  })
  @get()
  static getGpl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpl",
  })
  @post("{id}")
  static createGpl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
