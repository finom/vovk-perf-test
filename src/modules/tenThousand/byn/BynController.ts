import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("byn")
export default class BynController {
  @operation({
    summary: "Get Byn",
  })
  @get()
  static getByn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Byn",
  })
  @post("{id}")
  static createByn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
