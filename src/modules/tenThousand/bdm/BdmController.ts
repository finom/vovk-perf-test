import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bdm")
export default class BdmController {
  @operation({
    summary: "Get Bdm",
  })
  @get()
  static getBdm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bdm",
  })
  @post("{id}")
  static createBdm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
