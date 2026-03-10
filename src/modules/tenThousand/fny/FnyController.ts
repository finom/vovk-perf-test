import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fny")
export default class FnyController {
  @operation({
    summary: "Get Fny",
  })
  @get()
  static getFny = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fny",
  })
  @post("{id}")
  static createFny = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
