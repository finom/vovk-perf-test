import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lco")
export default class LcoController {
  @operation({
    summary: "Get Lco",
  })
  @get()
  static getLco = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lco",
  })
  @post("{id}")
  static createLco = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
