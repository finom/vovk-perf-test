import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fnn")
export default class FnnController {
  @operation({
    summary: "Get Fnn",
  })
  @get()
  static getFnn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fnn",
  })
  @post("{id}")
  static createFnn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
