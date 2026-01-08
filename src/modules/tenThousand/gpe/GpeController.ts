import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gpe")
export default class GpeController {
  @operation({
    summary: "Get Gpe",
  })
  @get()
  static getGpe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpe",
  })
  @post("{id}")
  static createGpe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
