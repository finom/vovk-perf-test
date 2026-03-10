import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dbi")
export default class DbiController {
  @operation({
    summary: "Get Dbi",
  })
  @get()
  static getDbi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dbi",
  })
  @post("{id}")
  static createDbi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
