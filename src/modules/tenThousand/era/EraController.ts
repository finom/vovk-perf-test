import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("era")
export default class EraController {
  @operation({
    summary: "Get Era",
  })
  @get()
  static getEra = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Era",
  })
  @post("{id}")
  static createEra = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
