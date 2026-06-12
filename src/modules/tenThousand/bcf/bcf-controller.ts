import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bcf")
export default class BcfController {
  @operation({
    summary: "Get Bcf",
  })
  @get()
  static getBcf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bcf",
  })
  @post("{id}")
  static createBcf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
