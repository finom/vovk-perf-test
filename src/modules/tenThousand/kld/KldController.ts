import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kld")
export default class KldController {
  @operation({
    summary: "Get Kld",
  })
  @get()
  static getKld = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kld",
  })
  @post("{id}")
  static createKld = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
