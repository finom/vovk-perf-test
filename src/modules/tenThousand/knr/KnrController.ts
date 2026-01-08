import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("knr")
export default class KnrController {
  @operation({
    summary: "Get Knr",
  })
  @get()
  static getKnr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knr",
  })
  @post("{id}")
  static createKnr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
