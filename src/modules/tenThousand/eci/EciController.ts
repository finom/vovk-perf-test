import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eci")
export default class EciController {
  @operation({
    summary: "Get Eci",
  })
  @get()
  static getEci = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eci",
  })
  @post("{id}")
  static createEci = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
