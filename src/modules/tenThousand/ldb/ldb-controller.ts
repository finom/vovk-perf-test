import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ldb")
export default class LdbController {
  @operation({
    summary: "Get Ldb",
  })
  @get()
  static getLdb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ldb",
  })
  @post("{id}")
  static createLdb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
