import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cwt")
export default class CwtController {
  @operation({
    summary: "Get Cwt",
  })
  @get()
  static getCwt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cwt",
  })
  @post("{id}")
  static createCwt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
