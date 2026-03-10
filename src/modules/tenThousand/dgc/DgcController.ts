import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dgc")
export default class DgcController {
  @operation({
    summary: "Get Dgc",
  })
  @get()
  static getDgc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dgc",
  })
  @post("{id}")
  static createDgc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
