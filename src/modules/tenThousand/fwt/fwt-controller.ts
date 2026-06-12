import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fwt")
export default class FwtController {
  @operation({
    summary: "Get Fwt",
  })
  @get()
  static getFwt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fwt",
  })
  @post("{id}")
  static createFwt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
