import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ebc")
export default class EbcController {
  @operation({
    summary: "Get Ebc",
  })
  @get()
  static getEbc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ebc",
  })
  @post("{id}")
  static createEbc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
