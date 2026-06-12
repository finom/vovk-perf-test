import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ccn")
export default class CcnController {
  @operation({
    summary: "Get Ccn",
  })
  @get()
  static getCcn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ccn",
  })
  @post("{id}")
  static createCcn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
