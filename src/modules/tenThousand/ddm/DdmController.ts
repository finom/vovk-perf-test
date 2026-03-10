import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ddm")
export default class DdmController {
  @operation({
    summary: "Get Ddm",
  })
  @get()
  static getDdm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ddm",
  })
  @post("{id}")
  static createDdm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
