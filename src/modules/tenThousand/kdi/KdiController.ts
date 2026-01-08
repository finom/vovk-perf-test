import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kdi")
export default class KdiController {
  @operation({
    summary: "Get Kdi",
  })
  @get()
  static getKdi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdi",
  })
  @post("{id}")
  static createKdi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
