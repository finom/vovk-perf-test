import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("frq")
export default class FrqController {
  @operation({
    summary: "Get Frq",
  })
  @get()
  static getFrq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Frq",
  })
  @post("{id}")
  static createFrq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
