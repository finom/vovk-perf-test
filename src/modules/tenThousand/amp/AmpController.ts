import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("amp")
export default class AmpController {
  @operation({
    summary: "Get Amp",
  })
  @get()
  static getAmp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amp",
  })
  @post("{id}")
  static createAmp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
