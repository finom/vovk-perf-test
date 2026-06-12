import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dga")
export default class DgaController {
  @operation({
    summary: "Get Dga",
  })
  @get()
  static getDga = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dga",
  })
  @post("{id}")
  static createDga = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
