import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxa")
export default class KxaController {
  @operation({
    summary: "Get Kxa",
  })
  @get()
  static getKxa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxa",
  })
  @post("{id}")
  static createKxa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
