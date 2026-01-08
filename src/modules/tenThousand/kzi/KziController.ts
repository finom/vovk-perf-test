import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kzi")
export default class KziController {
  @operation({
    summary: "Get Kzi",
  })
  @get()
  static getKzi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzi",
  })
  @post("{id}")
  static createKzi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
