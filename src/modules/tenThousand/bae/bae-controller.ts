import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bae")
export default class BaeController {
  @operation({
    summary: "Get Bae",
  })
  @get()
  static getBae = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bae",
  })
  @post("{id}")
  static createBae = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
