import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fko")
export default class FkoController {
  @operation({
    summary: "Get Fko",
  })
  @get()
  static getFko = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fko",
  })
  @post("{id}")
  static createFko = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
