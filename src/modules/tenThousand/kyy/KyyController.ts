import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kyy")
export default class KyyController {
  @operation({
    summary: "Get Kyy",
  })
  @get()
  static getKyy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyy",
  })
  @post("{id}")
  static createKyy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
