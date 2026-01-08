import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gma")
export default class GmaController {
  @operation({
    summary: "Get Gma",
  })
  @get()
  static getGma = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gma",
  })
  @post("{id}")
  static createGma = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
