import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("akp")
export default class AkpController {
  @operation({
    summary: "Get Akp",
  })
  @get()
  static getAkp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akp",
  })
  @post("{id}")
  static createAkp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
