import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eoc")
export default class EocController {
  @operation({
    summary: "Get Eoc",
  })
  @get()
  static getEoc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eoc",
  })
  @post("{id}")
  static createEoc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
