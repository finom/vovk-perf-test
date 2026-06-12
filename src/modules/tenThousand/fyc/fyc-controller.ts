import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fyc")
export default class FycController {
  @operation({
    summary: "Get Fyc",
  })
  @get()
  static getFyc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fyc",
  })
  @post("{id}")
  static createFyc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
