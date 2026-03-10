import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bas")
export default class BasController {
  @operation({
    summary: "Get Bas",
  })
  @get()
  static getBas = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bas",
  })
  @post("{id}")
  static createBas = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
