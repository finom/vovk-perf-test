import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kyq")
export default class KyqController {
  @operation({
    summary: "Get Kyq",
  })
  @get()
  static getKyq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyq",
  })
  @post("{id}")
  static createKyq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
