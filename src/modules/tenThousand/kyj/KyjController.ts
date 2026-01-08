import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kyj")
export default class KyjController {
  @operation({
    summary: "Get Kyj",
  })
  @get()
  static getKyj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyj",
  })
  @post("{id}")
  static createKyj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
