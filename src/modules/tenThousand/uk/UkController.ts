import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("uk")
export default class UkController {
  @operation({
    summary: "Get Uk",
  })
  @get()
  static getUk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Uk",
  })
  @post("{id}")
  static createUk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
