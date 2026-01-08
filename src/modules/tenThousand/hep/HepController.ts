import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hep")
export default class HepController {
  @operation({
    summary: "Get Hep",
  })
  @get()
  static getHep = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hep",
  })
  @post("{id}")
  static createHep = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
