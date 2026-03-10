import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dpw")
export default class DpwController {
  @operation({
    summary: "Get Dpw",
  })
  @get()
  static getDpw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dpw",
  })
  @post("{id}")
  static createDpw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
