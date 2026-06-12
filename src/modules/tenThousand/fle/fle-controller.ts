import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fle")
export default class FleController {
  @operation({
    summary: "Get Fle",
  })
  @get()
  static getFle = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fle",
  })
  @post("{id}")
  static createFle = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
