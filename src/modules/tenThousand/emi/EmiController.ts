import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("emi")
export default class EmiController {
  @operation({
    summary: "Get Emi",
  })
  @get()
  static getEmi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emi",
  })
  @post("{id}")
  static createEmi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
