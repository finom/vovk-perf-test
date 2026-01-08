import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ktr")
export default class KtrController {
  @operation({
    summary: "Get Ktr",
  })
  @get()
  static getKtr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktr",
  })
  @post("{id}")
  static createKtr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
