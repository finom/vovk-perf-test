import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kep")
export default class KepController {
  @operation({
    summary: "Get Kep",
  })
  @get()
  static getKep = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kep",
  })
  @post("{id}")
  static createKep = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
