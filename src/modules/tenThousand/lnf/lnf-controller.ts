import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lnf")
export default class LnfController {
  @operation({
    summary: "Get Lnf",
  })
  @get()
  static getLnf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lnf",
  })
  @post("{id}")
  static createLnf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
