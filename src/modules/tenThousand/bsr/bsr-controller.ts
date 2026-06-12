import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bsr")
export default class BsrController {
  @operation({
    summary: "Get Bsr",
  })
  @get()
  static getBsr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bsr",
  })
  @post("{id}")
  static createBsr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
