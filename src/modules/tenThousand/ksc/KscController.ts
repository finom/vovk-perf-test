import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ksc")
export default class KscController {
  @operation({
    summary: "Get Ksc",
  })
  @get()
  static getKsc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksc",
  })
  @post("{id}")
  static createKsc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
