import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ccc")
export default class CccController {
  @operation({
    summary: "Get Ccc",
  })
  @get()
  static getCcc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ccc",
  })
  @post("{id}")
  static createCcc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
