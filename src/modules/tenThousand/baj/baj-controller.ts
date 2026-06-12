import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("baj")
export default class BajController {
  @operation({
    summary: "Get Baj",
  })
  @get()
  static getBaj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Baj",
  })
  @post("{id}")
  static createBaj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
