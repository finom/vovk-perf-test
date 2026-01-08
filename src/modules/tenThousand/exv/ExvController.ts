import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("exv")
export default class ExvController {
  @operation({
    summary: "Get Exv",
  })
  @get()
  static getExv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exv",
  })
  @post("{id}")
  static createExv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
