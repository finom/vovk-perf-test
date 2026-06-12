import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("frg")
export default class FrgController {
  @operation({
    summary: "Get Frg",
  })
  @get()
  static getFrg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Frg",
  })
  @post("{id}")
  static createFrg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
