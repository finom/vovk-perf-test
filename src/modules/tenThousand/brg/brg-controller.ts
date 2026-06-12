import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("brg")
export default class BrgController {
  @operation({
    summary: "Get Brg",
  })
  @get()
  static getBrg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Brg",
  })
  @post("{id}")
  static createBrg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
