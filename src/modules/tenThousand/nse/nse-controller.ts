import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nse")
export default class NseController {
  @operation({
    summary: "Get Nse",
  })
  @get()
  static getNse = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nse",
  })
  @post("{id}")
  static createNse = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
