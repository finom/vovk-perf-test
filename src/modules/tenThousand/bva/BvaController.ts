import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bva")
export default class BvaController {
  @operation({
    summary: "Get Bva",
  })
  @get()
  static getBva = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bva",
  })
  @post("{id}")
  static createBva = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
