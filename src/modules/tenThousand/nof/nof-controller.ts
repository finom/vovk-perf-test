import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nof")
export default class NofController {
  @operation({
    summary: "Get Nof",
  })
  @get()
  static getNof = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nof",
  })
  @post("{id}")
  static createNof = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
