import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dik")
export default class DikController {
  @operation({
    summary: "Get Dik",
  })
  @get()
  static getDik = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dik",
  })
  @post("{id}")
  static createDik = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
