import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kuj")
export default class KujController {
  @operation({
    summary: "Get Kuj",
  })
  @get()
  static getKuj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kuj",
  })
  @post("{id}")
  static createKuj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
