import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dca")
export default class DcaController {
  @operation({
    summary: "Get Dca",
  })
  @get()
  static getDca = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dca",
  })
  @post("{id}")
  static createDca = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
