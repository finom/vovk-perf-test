import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mg")
export default class MgController {
  @operation({
    summary: "Get Mg",
  })
  @get()
  static getMg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mg",
  })
  @post("{id}")
  static createMg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
