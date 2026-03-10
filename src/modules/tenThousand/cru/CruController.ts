import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cru")
export default class CruController {
  @operation({
    summary: "Get Cru",
  })
  @get()
  static getCru = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cru",
  })
  @post("{id}")
  static createCru = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
