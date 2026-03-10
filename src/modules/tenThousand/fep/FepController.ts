import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fep")
export default class FepController {
  @operation({
    summary: "Get Fep",
  })
  @get()
  static getFep = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fep",
  })
  @post("{id}")
  static createFep = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
