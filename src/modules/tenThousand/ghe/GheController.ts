import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ghe")
export default class GheController {
  @operation({
    summary: "Get Ghe",
  })
  @get()
  static getGhe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghe",
  })
  @post("{id}")
  static createGhe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
