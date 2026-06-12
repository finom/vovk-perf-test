import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fdm")
export default class FdmController {
  @operation({
    summary: "Get Fdm",
  })
  @get()
  static getFdm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fdm",
  })
  @post("{id}")
  static createFdm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
