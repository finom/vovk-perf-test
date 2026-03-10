import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nw")
export default class NwController {
  @operation({
    summary: "Get Nw",
  })
  @get()
  static getNw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nw",
  })
  @post("{id}")
  static createNw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
