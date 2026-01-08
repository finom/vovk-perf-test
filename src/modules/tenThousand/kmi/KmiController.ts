import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kmi")
export default class KmiController {
  @operation({
    summary: "Get Kmi",
  })
  @get()
  static getKmi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmi",
  })
  @post("{id}")
  static createKmi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
