import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ctu")
export default class CtuController {
  @operation({
    summary: "Get Ctu",
  })
  @get()
  static getCtu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ctu",
  })
  @post("{id}")
  static createCtu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
