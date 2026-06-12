import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bic")
export default class BicController {
  @operation({
    summary: "Get Bic",
  })
  @get()
  static getBic = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bic",
  })
  @post("{id}")
  static createBic = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
