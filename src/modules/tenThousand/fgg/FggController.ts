import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fgg")
export default class FggController {
  @operation({
    summary: "Get Fgg",
  })
  @get()
  static getFgg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fgg",
  })
  @post("{id}")
  static createFgg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
