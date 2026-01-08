import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kkt")
export default class KktController {
  @operation({
    summary: "Get Kkt",
  })
  @get()
  static getKkt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkt",
  })
  @post("{id}")
  static createKkt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
