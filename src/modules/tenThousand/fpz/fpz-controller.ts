import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fpz")
export default class FpzController {
  @operation({
    summary: "Get Fpz",
  })
  @get()
  static getFpz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fpz",
  })
  @post("{id}")
  static createFpz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
