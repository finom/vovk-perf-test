import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("crp")
export default class CrpController {
  @operation({
    summary: "Get Crp",
  })
  @get()
  static getCrp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Crp",
  })
  @post("{id}")
  static createCrp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
