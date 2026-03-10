import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bra")
export default class BraController {
  @operation({
    summary: "Get Bra",
  })
  @get()
  static getBra = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bra",
  })
  @post("{id}")
  static createBra = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
