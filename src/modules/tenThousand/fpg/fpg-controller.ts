import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fpg")
export default class FpgController {
  @operation({
    summary: "Get Fpg",
  })
  @get()
  static getFpg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fpg",
  })
  @post("{id}")
  static createFpg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
