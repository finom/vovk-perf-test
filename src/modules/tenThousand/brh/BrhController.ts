import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("brh")
export default class BrhController {
  @operation({
    summary: "Get Brh",
  })
  @get()
  static getBrh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Brh",
  })
  @post("{id}")
  static createBrh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
