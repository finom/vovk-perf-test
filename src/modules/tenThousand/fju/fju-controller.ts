import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fju")
export default class FjuController {
  @operation({
    summary: "Get Fju",
  })
  @get()
  static getFju = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fju",
  })
  @post("{id}")
  static createFju = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
