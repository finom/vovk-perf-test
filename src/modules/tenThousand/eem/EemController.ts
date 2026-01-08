import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eem")
export default class EemController {
  @operation({
    summary: "Get Eem",
  })
  @get()
  static getEem = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eem",
  })
  @post("{id}")
  static createEem = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
