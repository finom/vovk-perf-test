import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dbe")
export default class DbeController {
  @operation({
    summary: "Get Dbe",
  })
  @get()
  static getDbe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dbe",
  })
  @post("{id}")
  static createDbe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
