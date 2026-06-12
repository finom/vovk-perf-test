import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fgy")
export default class FgyController {
  @operation({
    summary: "Get Fgy",
  })
  @get()
  static getFgy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fgy",
  })
  @post("{id}")
  static createFgy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
