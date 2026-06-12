import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("csf")
export default class CsfController {
  @operation({
    summary: "Get Csf",
  })
  @get()
  static getCsf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Csf",
  })
  @post("{id}")
  static createCsf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
