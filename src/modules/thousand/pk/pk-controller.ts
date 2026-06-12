import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("pk")
export default class PkController {
  @operation({
    summary: "Get Pk",
  })
  @get()
  static getPk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Pk",
  })
  @post("{id}")
  static createPk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
