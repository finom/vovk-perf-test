import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bnp")
export default class BnpController {
  @operation({
    summary: "Get Bnp",
  })
  @get()
  static getBnp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bnp",
  })
  @post("{id}")
  static createBnp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
