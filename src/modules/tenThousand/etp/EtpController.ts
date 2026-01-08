import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("etp")
export default class EtpController {
  @operation({
    summary: "Get Etp",
  })
  @get()
  static getEtp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etp",
  })
  @post("{id}")
  static createEtp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
