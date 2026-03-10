import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cwa")
export default class CwaController {
  @operation({
    summary: "Get Cwa",
  })
  @get()
  static getCwa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cwa",
  })
  @post("{id}")
  static createCwa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
