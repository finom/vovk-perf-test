import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gec")
export default class GecController {
  @operation({
    summary: "Get Gec",
  })
  @get()
  static getGec = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gec",
  })
  @post("{id}")
  static createGec = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
