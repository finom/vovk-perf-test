import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cdy")
export default class CdyController {
  @operation({
    summary: "Get Cdy",
  })
  @get()
  static getCdy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdy",
  })
  @post("{id}")
  static createCdy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
