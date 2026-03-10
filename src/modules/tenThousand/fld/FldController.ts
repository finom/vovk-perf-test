import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fld")
export default class FldController {
  @operation({
    summary: "Get Fld",
  })
  @get()
  static getFld = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fld",
  })
  @post("{id}")
  static createFld = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
