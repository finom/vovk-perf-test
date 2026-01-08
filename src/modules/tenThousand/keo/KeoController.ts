import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("keo")
export default class KeoController {
  @operation({
    summary: "Get Keo",
  })
  @get()
  static getKeo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Keo",
  })
  @post("{id}")
  static createKeo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
