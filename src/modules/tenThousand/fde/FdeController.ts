import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fde")
export default class FdeController {
  @operation({
    summary: "Get Fde",
  })
  @get()
  static getFde = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fde",
  })
  @post("{id}")
  static createFde = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
