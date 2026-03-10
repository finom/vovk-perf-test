import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fwi")
export default class FwiController {
  @operation({
    summary: "Get Fwi",
  })
  @get()
  static getFwi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fwi",
  })
  @post("{id}")
  static createFwi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
