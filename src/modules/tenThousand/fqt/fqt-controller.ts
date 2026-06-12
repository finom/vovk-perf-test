import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fqt")
export default class FqtController {
  @operation({
    summary: "Get Fqt",
  })
  @get()
  static getFqt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fqt",
  })
  @post("{id}")
  static createFqt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
